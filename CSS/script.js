// Add event listeners to numbers
numbers.forEach(number => {
    number.addEventListener('click', () => {
      if (currentInput === '0') {
        currentInput = number.value;
      } else {
        currentInput += number.value;
      }
      display.value = currentInput;
    });
  });
  
  // Add event listeners to operators
  operators.forEach(op => {
    op.addEventListener('click', () => {
      previousInput = currentInput;
      operator = op.value;
      currentInput = '0';
    });
  });
  
  // Add event listener to decimal
  decimal.addEventListener('click', () => {
    if (!currentInput.includes('.')) {
      currentInput += '.';
      display.value = currentInput;
    }
  });
  
  // Add event listener to clear
  clear.addEventListener('click', () => {
    currentInput = '0';
    previousInput = '0';
    operator = undefined;
    display.value = currentInput;
  });
  
  // Add event listener to equal
  equal.addEventListener('click', () => {
    if (operator) {
      currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
      display.value = currentInput;
    }
  });
  