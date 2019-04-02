const validator = (state, requirements) => {
    // Function has all input names and checks 
    // state to see if they have been filled out.

    let boolean = true;

    for (let i = 0; i < requirements.length; i++) {
        // state[requirements[i]] is the working version of state.requirements[i];
        if (state[requirements[i]] == undefined || state[requirements[i]] === '') {
            boolean = false;
        };
    };
    return boolean;
};

export default validator;