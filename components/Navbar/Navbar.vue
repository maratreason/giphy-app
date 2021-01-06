<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
        <div class="container">
            <a class="navbar-brand" href="#">Giphy-app</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <nuxt-link no-prefetch active-class="active" class="nav-link" to="/" exact>Home</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link no-prefetch active-class="active" class="nav-link" to="/search">Search</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link no-prefetch active-class="active" class="nav-link" to="/favorites">Favorites</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style scoped></style>
