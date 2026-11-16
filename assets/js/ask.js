/* ==========================================================
   ASK MITO · where topic requests are sent
   Fill in ONE of the two options below, then commit.
   Until then, the form shows a "coming soon" message.
   ========================================================== */
var ASK_CONFIG = {
  // "google", "formspree", or "" (not set up yet)
  provider: "google",

  // Option A · Google Form
  // formUrl: the form's link ending in /formResponse
  // fields:  the entry.123456 code for each question
  google: {
    formUrl: "",
    fields: { direction: "", topic: "", name: "", email: "" }
  },

  // Option B · Formspree
  // endpoint: looks like https://formspree.io/f/abcdwxyz
  formspree: {
    endpoint: ""
  }
};

(function () {
  var form = document.getElementById("ask-form");
  if (!form) return;
  var status = form.querySelector(".form-status");
  var topic = form.querySelector("#topic");
  var button = form.querySelector("button[type=submit]");

  function say(msg, kind) {
    status.textContent = msg;
    status.className = "form-status" + (kind ? " " + kind : "");
  }

  // Show idea chips for the chosen direction
  function syncIdeas() {
    var dir = form.querySelector("input[name=direction]:checked").value;
    form.querySelectorAll(".idea-group").forEach(function (g) {
      g.hidden = g.getAttribute("data-for") !== dir;
    });
  }
  form.querySelectorAll("input[name=direction]").forEach(function (r) {
    r.addEventListener("change", syncIdeas);
  });
  syncIdeas();

  form.querySelectorAll(".idea-group .chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      topic.value = chip.textContent;
      topic.focus();
    });
  });

  function ready() {
    if (ASK_CONFIG.provider === "google") {
      return !!(ASK_CONFIG.google.formUrl && ASK_CONFIG.google.fields.topic);
    }
    if (ASK_CONFIG.provider === "formspree") return !!ASK_CONFIG.formspree.endpoint;
    return false;
  }

  function send(data) {
    if (ASK_CONFIG.provider === "google") {
      var g = ASK_CONFIG.google, body = new URLSearchParams();
      Object.keys(g.fields).forEach(function (k) {
        if (g.fields[k] && data[k]) body.append(g.fields[k], data[k]);
      });
      // Google Forms doesn't allow reading the reply from another site,
      // so "no-cors" sends it and we trust it arrived.
      return fetch(g.formUrl, { method: "POST", mode: "no-cors", body: body });
    }
    return fetch(ASK_CONFIG.formspree.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data)
    }).then(function (r) { if (!r.ok) throw new Error("Request failed"); });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (form.website.value) return; // spam trap
    var data = {
      direction: form.querySelector("input[name=direction]:checked").value,
      topic: topic.value.trim(),
      name: form.name.value.trim(),
      email: form.email.value.trim()
    };
    if (!data.topic) { say("Tell Mito your topic or question first!", "error"); topic.focus(); return; }
    if (data.email && !form.email.checkValidity()) { say("That email doesn't look quite right.", "error"); form.email.focus(); return; }
    if (!ready()) {
      say("Mito's inbox is almost ready! Requests open very soon, please check back.", "error");
      return;
    }
    button.disabled = true;
    say("Sending…");
    send(data).then(function () {
      form.reset();
      syncIdeas();
      say("Got it! ⚡ Mito is on the case. Thanks" + (data.name ? ", " + data.name : "") + "!", "ok");
    }).catch(function () {
      say("Hmm, that didn't send. Please try again in a moment.", "error");
    }).then(function () { button.disabled = false; });
  });
})();
