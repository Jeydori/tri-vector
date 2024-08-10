import wixLocation from 'wix-location';


$w.onReady(function () {
    const queryParams = wixLocation.query;
    const scrollToTarget = queryParams.scrollTo;

    // Check if we are on the homepage before attempting to scroll
    if (scrollToTarget && wixLocation.url.includes('/')) {
        // Increase delay to ensure page is fully loaded
        setTimeout(() => {
            const targetElement = $w(`#${scrollToTarget}`);
            if (targetElement) {
                targetElement.scrollTo();
            }
        }, 1000); // Increased delay to 1000ms
    }

    

    $w('#box42').onClick(() => {
        $w('#multiStateBox1').changeState("box45"); // Change to the state where box45 is visible
    });

    $w('#box45').onClick(() => {
        $w('#multiStateBox1').changeState("box42"); // Change to the state where box42 is visible
    });

    $w('#box46').onClick(() => {
        $w('#multiStateBox2').changeState("box47"); // Change to the state where box45 is visible
    });

    $w('#box47').onClick(() => {
        $w('#multiStateBox2').changeState("box46"); // Change to the state where box42 is visible
    });

    $w('#box54').onClick(() => {
        $w('#multiStateBox4').changeState("box55"); // Change to the state where box45 is visible
    });

    $w('#box55').onClick(() => {
        $w('#multiStateBox4').changeState("box54"); // Change to the state where box42 is visible
    });

    $w('#box50').onClick(() => {
        $w('#multiStateBox3').changeState("box51"); // Change to the state where box45 is visible
    });

    $w('#box51').onClick(() => {
        $w('#multiStateBox3').changeState("box50"); // Change to the state where box42 is visible
    });

    $w('#button15').onClick(() => {
		wixLocation.to('/#section7'); // Navigate to the homepage and scroll to #box27
	});

	$w('#button16').onClick(() => {
    wixLocation.to('/#box26'); // Navigate to the homepage and scroll to #box27
	});

	$w('#button17').onClick(() => {
    wixLocation.to('/#box25'); // Navigate to the homepage and scroll to #box27
	});

	$w('#button18').onClick(() => {
    wixLocation.to('/#section1'); // Navigate to the homepage and scroll to #box27
	});

    $w('#button14').onClick(() => {
        console.log("Redirecting to homepage and scrolling to section1");
        wixLocation.to('/?show=section1'); // Navigate back to the previous page in the browser history
    });

    $w('#vectorImage8').onClick(() => {
        console.log("Scroll to #section1 triggered by button6");
        wixLocation.to('/?show=section1');
    });
    
});
