<template>
    <div class="sidebar-widgets">title | uppercase</div>
</template>

<script>
export default {
    name: "blog_sidebar",
    data: function() {
        return {
            title: "Testing"
        };
    },
    filters: {
        //Convert to uppercase
        uppercase: function(value) {
            return value.toUpperCase();
        }
    }
};
</script>
