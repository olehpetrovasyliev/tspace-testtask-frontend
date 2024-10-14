const spinButton = document.querySelector(".button-spin");
const firstBonus = document.querySelector(".bonus_firstSpin");
const secondBonus = document.querySelector(".bonus_secondSpin");
const wheelOptions = document.querySelector(".wheel__image-options");

const spinSound = document.getElementById("spinSound");
const winSound = document.getElementById("winSound");

const formToggleButtons = document.querySelectorAll(
  ".modal__button-formToggle"
);

const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");

const form = document.querySelector(".modal__form");

const dynamicInputWrapper = document.querySelector(
  ".modal__form-dynamicInputWrapper"
);

let count = 0;

spinButton.addEventListener("click", () => {
  count++;
  spinSound.currentTime = 0;
  spinSound.play();
  spinButton.disabled = true;
  if (count === 1) {
    wheelOptions.classList.add("firstSpin");
    setTimeout(() => {
      firstBonus.classList.remove("hidden");
      spinButton.disabled = false;
    }, 5100);
  } else if (count === 2) {
    wheelOptions.classList.add("secondSpin");
    setTimeout(() => {
      secondBonus.classList.remove("hidden");
      winSound.currentTime = 0;
      winSound.play();
    }, 5100);

    setTimeout(() => {
      backdrop.classList.remove("hidden");
    }, 7100);
    setTimeout(() => {
      modal.classList.remove("transparent");
    }, 7200);
  }
});

formToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    formToggleButtons.forEach((btn) => {
      btn.classList.remove("active");
      btn.disabled = false;
    });
    button.classList.add("active");
    button.disabled = true;

    if (button.id === "emailButton") {
      dynamicInputWrapper.innerHTML = `
     <div class="modal__form-dynamicInputWrapper">
              <div id="emailLabel">
                <p class="modal__form-labelText"> E-posta (gereki) </p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-posta"
                  class="modal__form-input modal__form-input-mail"
                />
              </div>
      `;
    } else if (button.id === "phoneButton") {
      dynamicInputWrapper.innerHTML = `
            <div class="modal__form-phoneElementsWrapper" id="phoneLabel">
                <div class="countrySelectWrapper">
                  <p class="modal__form-labelText">Ülke kodu</p>
                  <div class="selectWrapper countrySelect-wrapper">
                    <select
                      name="country"
                      id="country"
                      class="countrySelect-default select-default hidden"
                    >
                      <option value="90">TR +90</option>
                      <option value="1">US +1</option>
                      <option value="44">GB +44</option>
                      <option value="33">FR +33</option>
                      <option value="49">DE +49</option>
                      <option value="55">BR +55</option>
                      <option value="7">RU +7</option>
                      <option value="86">CN +86</option>
                      <option value="91">IN +91</option>
                      <option value="81">JP +81</option>
                      <option value="61">AU +61</option>
                      <option value="34">ES +34</option>
                      <option value="39">IT +39</option>
                      <option value="52">MX +52</option>
                      <option value="27">ZA +27</option>
                      <option value="82">KR +82</option>
                      <option value="65">SG +65</option>
                      <option value="31">NL +31</option>
                      <option value="46">SE +46</option>
                      <option value="41">CH +41</option>
                      <option value="32">BE +32</option>
                      <option value="47">NO +47</option>
                      <option value="48">PL +48</option>
                      <option value="351">PT +351</option>
                      <option value="43">AT +43</option>
                      <option value="36">HU +36</option>
                      <option value="30">GR +30</option>
                      <option value="45">DK +45</option>
                      <option value="420">CZ +420</option>
                      <option value="372">EE +372</option>
                      <option value="371">LV +371</option>
                      <option value="370">LT +370</option>
                      <option value="90">TR +90</option>
                      <option value="353">IE +353</option>
                      <option value="62">ID +62</option>
                      <option value="234">NG +234</option>
                      <option value="84">VN +84</option>
                      <option value="60">MY +60</option>
                      <option value="66">TH +66</option>
                      <option value="63">PH +63</option>
                      <option value="64">NZ +64</option>
                      <option value="54">AR +54</option>
                      <option value="51">PE +51</option>
                      <option value="20">EG +20</option>
                      <option value="212">MA +212</option>
                      <option value="92">PK +92</option>
                      <option value="971">AE +971</option>
                    </select>
                    <div
                      class="countryCodeSelect-selectedOption selected-option"
                    >
                      <div class="countryCodeSelect-value">TR +90</div>
                      <div class="arrow">▼</div>
                      <div
                        class="optionsList countryCodeSelect-optionsList hidden"
                      >
                        <div
                          class="countryCodeSelect-option option"
                          data-value="90"
                        >
                          TR +90
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="1"
                        >
                          US +1
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="44"
                        >
                          GB +44
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="33"
                        >
                          FR +33
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="49"
                        >
                          DE +49
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="55"
                        >
                          BR +55
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="7"
                        >
                          RU +7
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="86"
                        >
                          CN +86
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="91"
                        >
                          IN +91
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="81"
                        >
                          JP +81
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="61"
                        >
                          AU +61
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="34"
                        >
                          ES +34
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="39"
                        >
                          IT +39
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="52"
                        >
                          MX +52
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="27"
                        >
                          ZA +27
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="82"
                        >
                          KR +82
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="65"
                        >
                          SG +65
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="31"
                        >
                          NL +31
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="46"
                        >
                          SE +46
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="41"
                        >
                          CH +41
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="32"
                        >
                          BE +32
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="47"
                        >
                          NO +47
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="48"
                        >
                          PL +48
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="351"
                        >
                          PT +351
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="43"
                        >
                          AT +43
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="36"
                        >
                          HU +36
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="30"
                        >
                          GR +30
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="45"
                        >
                          DK +45
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="420"
                        >
                          CZ +420
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="372"
                        >
                          EE +372
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="371"
                        >
                          LV +371
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="370"
                        >
                          LT +370
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="90"
                        >
                          TR +90
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="353"
                        >
                          IE +353
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="62"
                        >
                          ID +62
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="234"
                        >
                          NG +234
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="84"
                        >
                          VN +84
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="60"
                        >
                          MY +60
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="66"
                        >
                          TH +66
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="63"
                        >
                          PH +63
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="64"
                        >
                          NZ +64
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="54"
                        >
                          AR +54
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="51"
                        >
                          PE +51
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="20"
                        >
                          EG +20
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="212"
                        >
                          MA +212
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="92"
                        >
                          PK +92
                        </div>
                        <div
                          class="countryCodeSelect-option option"
                          data-value="971"
                        >
                          AE +971
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal__form-phoneInputWrapper">
                  <p class="modal__form-labelText">Telefon</p>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Telefon"
                    class="modal__form-input modal__form-input-phone"
                  />
                </div>
              </div>
      `;
      const countrySelectElement = document.querySelector(
        ".countrySelect-default"
      );
      const countryCustomSelectWrapper = document.querySelector(
        ".countrySelect-wrapper"
      );
      const countrySelectedOption = document.querySelector(
        ".countryCodeSelect-selectedOption"
      );
      const countryOptionsList = document.querySelector(
        ".countryCodeSelect-optionsList"
      );
      const countryOptionItems = document.querySelectorAll(
        ".countryCodeSelect-option"
      );
      const countryValueDisplay = document.querySelector(
        ".countryCodeSelect-value"
      );

      initCustomSelect(
        countrySelectElement,
        countryCustomSelectWrapper,
        countrySelectedOption,
        countryOptionsList,
        countryOptionItems,
        countryValueDisplay
      );
    }
  });
});

function initCustomSelect(
  selectElement,
  customSelectWrapper,
  selectedOption,
  optionsList,
  optionItems,
  valueDisplay
) {
  selectedOption.addEventListener("click", (e) => {
    e.stopPropagation();
    optionsList.classList.toggle("hidden");
  });

  document.addEventListener("click", (event) => {
    if (!customSelectWrapper.contains(event.target)) {
      optionsList.classList.add("hidden");
    }
  });

  const selectOption = (value, text) => {
    valueDisplay.textContent = text;
    selectElement.value = value;
    optionsList.classList.add("hidden");
  };

  optionItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      const value = item.getAttribute("data-value");
      const text = item.textContent;
      selectOption(value, text);
    });
  });
}

const currencySelectElement = document.querySelector(".currencySelect-default");
const currencyCustomSelectWrapper = document.querySelector(
  ".currencySelet-wrapper"
);
const currencySelectedOption = document.querySelector(
  ".currecySelect-selectedOption"
);
const currencyOptionsList = document.querySelector(
  ".currencySelect-optionsList"
);
const currencyOptionItems = document.querySelectorAll(".currencySelect-option");
const currencyValueDisplay = document.querySelector(".currecySelect-value");

initCustomSelect(
  currencySelectElement,
  currencyCustomSelectWrapper,
  currencySelectedOption,
  currencyOptionsList,
  currencyOptionItems,
  currencyValueDisplay
);

const passwordInput = document.querySelector("#password");
const hideIcon = document.querySelector(".hideIcon");

hideIcon.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});

const customAlert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const formObject = Object.fromEntries(formData.entries());

  const userInfo = !formObject.phone
    ? {
        ...formObject,
        verified: Boolean(formObject.verified),
        agreement: Boolean(formObject.agreement),
      }
    : {
        ...formObject,
        verified: Boolean(formObject.verified),
        agreement: Boolean(formObject.agreement),
        phone: `+${formObject.country}${formObject.phone}`,
      };

  fetch("https://tspace-testtask-backend.onrender.com/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((response) => response.json())
    .then((data) => {
      if (!data.status) {
        customAlert.classList.toggle(hidden);
      } else alert("Registration succesful");
    })
    .catch((error) => {
      console.log(error);

      customAlert.classList.remove(hidden);
    });
});
