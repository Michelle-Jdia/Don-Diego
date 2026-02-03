// Настройки "на неделю" — меняйте здесь
    const RUTA_CITY = "Oaxaca";
    const VAULT_PASSWORD = "RUTA"; // ← замените на пароль недели
    // ------------------------------

    document.getElementById("rutaCity").textContent = RUTA_CITY;
    document.getElementById("year").textContent = new Date().getFullYear();

    const passInput = document.getElementById("vaultPass");
    const openBtn = document.getElementById("vaultBtn");
    const hintBtn = document.getElementById("vaultHintBtn");
    const hint = document.getElementById("vaultHint");
    const secret = document.getElementById("vaultSecret");

    function normalize(s){ return (s || "").trim().toUpperCase(); }

    function tryOpen(){
      const ok = normalize(passInput.value) === normalize(VAULT_PASSWORD);
      secret.classList.toggle("show", ok);
      if(!ok){
        secret.classList.remove("show");
        passInput.focus();
        passInput.select?.();
        // лёгкая "вибрация" карточки
        const card = secret.closest(".card");
        card.animate?.([
          { transform: "translateX(0px)" },
          { transform: "translateX(-6px)" },
          { transform: "translateX(6px)" },
          { transform: "translateX(0px)" }
        ], { duration: 220, iterations: 1 });
      }
    }

    openBtn.addEventListener("click", tryOpen);
    passInput.addEventListener("keydown", (e)=>{ if(e.key === "Enter") tryOpen(); });
    hintBtn.addEventListener("click", ()=>{ hint.style.display = (hint.style.display === "none" ? "block" : "none"); });
