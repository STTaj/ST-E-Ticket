function changeDivColorOnClick(className, maxSelection) {
    const buttons = document.querySelectorAll('.' + className);

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const parentDiv = button.parentElement;
            const selectedButtons = document.querySelectorAll('.selected');

            if (selectedButtons.length >= maxSelection && !parentDiv.classList.contains('selected')) {
                alert('You can only select ' + maxSelection + ' Seats.');
                return; 
            }
            parentDiv.classList.toggle('selected');

            parentDiv.style.backgroundColor = parentDiv.classList.contains('selected') ? '#22c55e' : '';
        });
    });
}
changeDivColorOnClick('my-seats', 4);



let seatsLeft = 40;

document.querySelectorAll('.my-seats').forEach(button => {
    button.addEventListener('click', () => {
        if (seatsLeft > 0) {
            seatsLeft--;
            updateSeatsLeft();
        }
    });
});

function updateSeatsLeft() {
    const seatsLeftElement = document.getElementById('seatsLeft');
    seatsLeftElement.textContent = seatsLeft;
}



function updateSeatsOnClick() {
    const seatInfoContainer = document.getElementById('seatInfoContainer');
    const seatInfo = document.getElementById('seatInfo');
    const selectedSeatsElement = document.getElementById('selectedSeats');
    const totalPriceElement = document.getElementById('totalPrice');
    const grandTotalElement = document.getElementById('grandTotal');
    const couponInput = document.querySelector('.input-ghost');
    const applyButton = document.querySelector('.btn');

    let seatsLeft = 40;
    let selectedSeats = 0;
    const seatPrice = 550;
    let totalPrice = 0;

    // Show seat information container when the page loads
    seatInfoContainer.style.display = 'block';

    document.querySelectorAll('.my-seats').forEach(button => {
        button.addEventListener('click', () => {
            if (seatsLeft > 0 && selectedSeats < 4) {
                seatsLeft--;
                selectedSeats++;
                totalPrice += seatPrice;
                updateDisplay(button.textContent);
                updateTotalPrice();
                updateSelectedSeats();
            } else {
                alert('No more seats available or maximum selection reached!');
            }
        });
    });

    applyButton.addEventListener('click', () => {
        // Apply coupon logic can be implemented here
        alert('Coupon functionality can be implemented here');
    });

    function updateDisplay(seatName) {
        seatInfo.innerHTML += `
            <div class="flex justify-between py-3">
                <p>${seatName}</p>
                <p>Class</p>
                <p>${seatPrice}</p>
            </div>`;
    }

    function updateTotalPrice() {
        totalPriceElement.textContent = totalPrice;
        grandTotalElement.textContent = totalPrice;
    }

    function updateSelectedSeats() {
        selectedSeatsElement.textContent = selectedSeats;
    }
}

// Ensure DOM content is loaded before calling the function
document.addEventListener('DOMContentLoaded', updateSeatsOnClick);





function applyCoupon() {
    const couponInput = document.querySelector('.coupon-input');
    const applyButton = document.querySelector('.coupon-btn');
    const totalPriceElement = document.getElementById('totalPrice');
    const grandTotalElement = document.getElementById('grandTotal');

    applyButton.addEventListener('click', () => {
        const couponCode = couponInput.value.trim(); // Get the value of the coupon input and remove leading/trailing whitespace

        // Example coupon code logic
        if (couponCode === 'NEW15') {
            // Apply a 15% discount
            let totalPrice = parseFloat(totalPriceElement.textContent); // Use parseFloat to handle decimal values
            let discountedPrice = totalPrice * 0.85; // 15% discount
            grandTotalElement.textContent = discountedPrice.toFixed(2); // Round to 2 decimal places
            alert('Coupon applied successfully! You got a 15% discount.');
        } else if (couponCode === 'Couple 20') {
            // Apply a 20% discount
            let totalPrice = parseFloat(totalPriceElement.textContent); // Use parseFloat to handle decimal values
            let discountedPrice = totalPrice * 0.80; // 20% discount
            grandTotalElement.textContent = discountedPrice.toFixed(2); // Round to 2 decimal places
            alert('Coupon applied successfully! You got a 20% discount.');
        } else {
            alert('Invalid coupon code. Please try again.');
        }
    });
}

// Ensure DOM content is loaded before calling the function
document.addEventListener('DOMContentLoaded', applyCoupon);
