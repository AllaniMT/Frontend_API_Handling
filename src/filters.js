import Vue from "vue";

//Make Reverse
Vue.filter("reversing", function(value) {
    return value
        .split("")
        .reverse()
        .join("");
});

// Shorten Text
Vue.filter("shorten", function(value, textLength, suffix) {
    return value.substring(0, textLength) + suffix;
});
