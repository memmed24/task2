const rules = {
    posts: {
        title: {
            minLength: 3,
            acceptEmpty: false
        },
        body: {
            minLength: 10,
            acceptEmpty: false
        }
    }
}

export default rules;