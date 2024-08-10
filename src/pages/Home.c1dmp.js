import wixLocation from 'wix-location';

$w.onReady(function () {
    const states = ['box1', 'box2', 'box33', 'box34'];
    let stateNum = 0;
    const menu = $w('#hamburgerMenuContainer2');

    function updateState(direction) {
        const previousStateNum = stateNum;
        stateNum = direction === 'next' 
            ? (stateNum + 1) % states.length 
            : (stateNum - 1 + states.length) % states.length;

        const previousElement = $w(`#${states[previousStateNum]}`);
        const currentElement = $w(`#${states[stateNum]}`);

        console.log(`Transitioning from ${states[previousStateNum]} to ${states[stateNum]}`);

        // Ensure previous element is visible
        previousElement.show().then(() => {
            // Force a reflow to ensure visibility is applied
            previousElement.style.display = 'block';
            previousElement.style.animation = direction === 'next' 
                ? 'slide-out-left 0.5s ease forwards' 
                : 'slide-out-right 0.5s ease forwards';

            // Ensure current element is also visible
            currentElement.show().then(() => {
                // Force a reflow to ensure visibility is applied
                currentElement.style.display = 'block';
                currentElement.style.animation = direction === 'next' 
                    ? 'slide-in-right 0.5s ease forwards' 
                    : 'slide-in-left 0.5s ease forwards';

                // Change the state after a short delay to ensure animation completion
                setTimeout(() => {
                    $w('#multiStateBox1').changeState(states[stateNum])
                        .then(() => {
                            console.log(`State changed to ${states[stateNum]}`);
                        })
                        .catch((error) => {
                            console.error(`Error changing state to ${states[stateNum]}:`, error);
                        });
                }, 500); // Delay should match your animation duration

                // Reset animations after transition
                setTimeout(() => {
                    previousElement.style.animation = '';
                    currentElement.style.animation = '';
                }, 500); // Duration should match your animation duration
            });
        });
    }

    $w('#button7').onClick(() => {
        updateState('next');
    });

    $w('#button8').onClick(() => {
        updateState('prev');
    });

    // Scroll functionality remains the same
    $w('#button1').onClick(() => {
        console.log("Scroll to #box27 triggered by button1");
        $w('#section7').scrollTo();
    });

    $w('#button2').onClick(() => {
    wixLocation.to('/blank?show=section5'); // Navigate to the homepage and scroll to #box27
	});

    $w('#button3').onClick(() => {
        console.log("Scroll to #box27 triggered by button3");
        $w('#section7').scrollTo();
    });

    $w('#button4').onClick(() => {
        console.log("Scroll to #box26 triggered by button4");
        $w('#box26').scrollTo();
    });

    $w('#button5').onClick(() => {
        console.log("Scroll to #box25 triggered by button5");
        $w('#box25').scrollTo();
    });

    $w('#button6').onClick(() => {
        console.log("Scroll to #section1 triggered by button6");
        $w('#section1').scrollTo();
    });

    $w('#button9').onClick(() => {
        console.log("Scroll to #box27 triggered by button3");
        $w('#section7').scrollTo();
        if (menu) {
            menu.close(); // This will close the menu if it has a close method
        }
    });

    $w('#button10').onClick(() => {
        console.log("Scroll to #box26 triggered by button4");
        $w('#box26').scrollTo();
        if (menu) {
            menu.close(); // This will close the menu if it has a close method
        }
    });

    $w('#button11').onClick(() => {
        console.log("Scroll to #box25 triggered by button5");
        $w('#box25').scrollTo();
        if (menu) {
            menu.close(); // This will close the menu if it has a close method
        }
    });

    $w('#button12').onClick(() => {
        console.log("Scroll to #section1 triggered by button6");
        $w('#section1').scrollTo();

         if (menu) {
            menu.close(); // This will close the menu if it has a close method
        }

    });

    $w('#vectorImage3').onClick(() => {
        console.log("Scroll to #section1 triggered by button6");
        $w('#section1').scrollTo();
    });


});
