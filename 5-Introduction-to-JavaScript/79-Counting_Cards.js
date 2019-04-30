/*Summary: Created a counting cards game with a switch statement.  It checks the
value of each card and increases the card count by 1 if the card is a 2, 3, 4, 5 6
Don't add to the count if the card is 7, 8 or 9. Decrease the card count by 1
if the card is 10, A, K, Q or J. */

var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;

    case 7:
    case 8:
    case 9:
      break;

    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1;
  }

  if (count > 0) {
    return count + ' Bet';
  } else if (count <= 0) {
    return count + ' Hold';
  }
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
