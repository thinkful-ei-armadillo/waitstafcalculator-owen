/* eslint-disable no-console */
'use strict';
/* global $ */

const STORE = {
  mealDetails: {
    base: 0,
    tax: 10,
    pctTip: 18
  },
  ledger: {
    subtotal: 0,
    tip: 0,
    total: 0,
    tipTotal: 0,
    mealCount: 0,
    avgTip: 0
  }
};

function render() {
  let html = generateHTMLString(STORE.ledger);
  $('.calculator').html(html);
}

// im unsure that these functions are going to be used
// function renderMealDetails() {

// }

// function renderCustomerCharges() {

// }

// function renderEarningsInfo() {

// }

function generateHTMLString (array) {
  let mealDetailsHTML = generateMealDetailsHTML();
  let ledgerHTML = generateLedgerHTML(array);
  let calculatorHTML = mealDetailsHTML + ledgerHTML;
  return calculatorHTML;
  // fix this.  I want to recieve the chargesAndEarnings database and render that on the screen
  // the same # props every time
  // no need for array map because input and output are consistent data type and cumulative
  // return array.map((item,index) => `<span class="${keys[index]} js-${keys[index]}">${item}</span>`);
}

function generateMealDetailsHTML() {
  return `
  <section class="enter-meal-detail">
      <form class="entry js-entry">
        <!-- meal detail data entry -->
        <label for="base">Base Meal Price</label>
        $<input type="number" class="base js-base" placeholder="9.99" required>
        <label for="tax">Tax Rate</label>
        <input type="number" class="tax js-tax" placeholder="8">%
        <label for="tip">Tip %</label>
        <input type="number" class="pct-tip js-pct-tip" placeholder="18">%
        <!-- data submission controls -->
        <section class="entry-controls js-entry-controls">
          <input type="submit" class="submit-button js-submit">
          <input type="button" class="cancel-button js-cancel">Cancel
        </section>
      </form>
    </section>
  `;
}

function generateLedgerHTML(array) {
  return `
  <section class="ledger js-ledger">
      <section class="charges js-charges">
        <span class="subtotal js-subtotal">${array.subtotal}</span>
        <span class="tip js-tip">${array.tip}</span>
        <span class="total js-total">${array.total}</span>
      </section>
      <!-- tip total, meal count total, avg tip per meal display -->
      <section class="earnings js-earnings">
        <span class="tip-total js-tip-total">${array.tipTotal}</span>
        <span class="meal-count js-meal-count">${array.mealCount}</span>
        <span class="average-tip js-average-tip">${array.avgTip}</span>
      </section>
    </section>
  `;
}


function handleSubmit() {
  getEntry();
  updateLedger();
  render();
  console.log('ready to submit');
}

function getEntry() {
  STORE.mealDetails.base = $('.js-base').val();
  STORE.mealDetails.tax = $('.js-tax').val();
  STORE.mealDetails.pctTip = $('.js-pct-tip').val();
}

function updateLedger() {
  //customer chargers panel
  calculateSubtotal();
  calculateTip();
  calculateTotal();

  //my earnings info panel
  calculateTipTotal();
  //meal count increment tied to successful submission?
  calculateAvgTipPerMeal();

}

function handleCancel() {
  clearEntry();
  render();
}

function clearEntry() {
  //select text fields and clear values
}

function handleReset() {
  clearEntry();
  resetSTORE();
  render();
}

function resetSTORE() {
  STORE.mealDetails = {
    base: 0,
    tax: 10,
    pctTip: 18
  };
  STORE.ledger = {
    subtotal: 0,
    tip: 0,
    total: 0,
    tipTotal: 0,
    mealCount: 0,
    avgTip: 0
  };
}

function calculateSubtotal() {

}

function calculateTip() {

}

function calculateTotal() {

}

function calculateTipTotal() {

}

//meal count increment tied to successful submission?

function calculateAvgTipPerMeal() {

}

function handleWaitstaffCalculation() {
  handleSubmit();
  handleCancel();
  handleReset();
  render();
}

handleWaitstaffCalculation();