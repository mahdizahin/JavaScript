const terms = 11;

function step1(callBack) {
    console.log(`Step 1 is in progress...`);
    setTimeout(function () {
        if (terms > 0) {
            callBack();
            console.log("Step 1 is done");
        } else {
            console.log(`Step 1 failed`);
        }
    }, 2000);
}

function step2(callBack) {
    console.log(`Step 2 is in progress...`);
    setTimeout(function () {
        if (terms > 10) {
            callBack();
            console.log("Step 2 is done");
        } else {
            console.log(`Step 2 failed`);
        }
    }, 3000);
}

function step3() {
    console.log(`Step 3 is in progress...`);
    setTimeout(function () {
        if (terms > 20) {
            console.log("Step 3 is done");
        } else {
            console.log(`Step 3 failed`);
        }
    }, 4000);
}

step1(function () {
    step2(step3);
});
