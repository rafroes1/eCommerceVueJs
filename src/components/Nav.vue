<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav>
            <b-nav-item to="/cart">Cart</b-nav-item>
          </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>{{ $store.state.fullname }}</em>
            </template>
            <b-dropdown-item v-if="!$store.state.isLoggedIn" v-b-modal.modal-login href="#">Login</b-dropdown-item>
            <b-dropdown-item v-if="!$store.state.isLoggedIn" v-b-modal.modal-register href="#">Register</b-dropdown-item>
            <b-dropdown-item v-if="$store.state.isLoggedIn" to="/account">My Account</b-dropdown-item>
            <b-dropdown-item v-if="$store.state.isLoggedIn" href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
