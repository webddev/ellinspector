$(document).ready(function () {
  $(".flip-clock").each(function (_, flipClock) {
    // generate handles for each flip element and its child elements
    const daysFirst = createHandles($(flipClock).find(".days-first"));
    const daysLast = createHandles($(flipClock).find(".days-last"));
    const hoursFirst = createHandles($(flipClock).find(".hours-first"));
    const hoursLast = createHandles($(flipClock).find(".hours-last"));
    const minutesFirst = createHandles($(flipClock).find(".minutes-first"));
    const minutesLast = createHandles($(flipClock).find(".minutes-last"));
    const secondsFirst = createHandles($(flipClock).find(".seconds-first"));
    const secondsLast = createHandles($(flipClock).find(".seconds-last"));

    let initialNumber = 33737490;
    setInitialValues(secondsFirst, initialNumber.toString()[6]);
    setInitialValues(secondsLast, initialNumber.toString()[7]);
    setInitialValues(minutesFirst, initialNumber.toString()[4]);
    setInitialValues(minutesLast, initialNumber.toString()[5]);
    setInitialValues(hoursFirst, initialNumber.toString()[2]);
    setInitialValues(hoursLast, initialNumber.toString()[3]);
    setInitialValues(daysFirst, initialNumber.toString()[0]);
    setInitialValues(daysLast, initialNumber.toString()[1]);

    setInterval(() => {
      initialNumber++;
      flipDigit(secondsLast, initialNumber.toString()[7]);
      flipDigit(secondsFirst, initialNumber.toString()[6]);

      flipDigit(minutesLast, initialNumber.toString()[5]);
      flipDigit(minutesFirst, initialNumber.toString()[4]);

      flipDigit(hoursLast, initialNumber.toString()[3]);
      flipDigit(hoursFirst, initialNumber.toString()[2]);

      flipDigit(daysLast, initialNumber.toString()[1]);
      flipDigit(daysFirst, initialNumber.toString()[0]);
    }, 1000);
  });

  function setInitialValues(flipElement, initialValue) {
    const {
      flipperTop,
      flipperBottom,
      flipperDisplayBottom,
      flipperDisplayTop,
      flipHiddenInput,
    } = flipElement;
    flipperTop.text(initialValue);
    flipperBottom.text(initialValue);
    flipperDisplayBottom.text(initialValue);
    flipperDisplayTop.text(initialValue);
    flipHiddenInput.val(initialValue);
  }

  function createHandles(flipElement) {
    const flipperTop = flipElement.find(".flipper-top");
    const flipperBottom = flipElement.find(".flipper-bottom");
    const flipperDisplayTop = flipElement.find(".flip-display-top");
    const flipperDisplayBottom = flipElement.find(".flip-display-bottom");
    const flipHiddenInput = flipElement.find("[type='hidden']");
    return {
      flipElement,
      flipperTop,
      flipperBottom,
      flipperDisplayBottom,
      flipperDisplayTop,
      flipHiddenInput,
    };
  }

  function flipDigit(flipHandles, digitValue) {
    const {
      flipElement,
      flipperTop,
      flipperBottom,
      flipperDisplayBottom,
      flipperDisplayTop,
      flipHiddenInput,
    } = flipHandles;

    const setPreviousValue = (value) => {
      flipperTop.text(value);
      flipperDisplayBottom.text(value);
    };
    const setAfterValue = (value) => {
      flipperDisplayTop.text(value);
      flipperBottom.text(value);
    };

    if (flipHiddenInput.val() !== digitValue) {
      setPreviousValue(flipHiddenInput.val());
      flipHiddenInput.val(digitValue).trigger("valueChanged");
    }

    flipHiddenInput.one("valueChanged", () => {
      setAfterValue(flipHiddenInput.val());
      flipElement.addClass("play");
    });

    flipperBottom.one("animationend", () => {
      setAfterValue(flipHiddenInput.val());
      setPreviousValue(flipHiddenInput.val());
      flipElement.removeClass("play");
    });
  }
});
