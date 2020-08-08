<template>
  <div class="account">
    <b-card no-body class="mt-3">
        <b-tabs pills card vertical>
          <b-tab title="Profile" active>
            <b-card-text>
              <Profile/>
            </b-card-text>
          </b-tab>
          <b-tab title="Change Password">
            <b-card-text>
              <ChangePassword/>
            </b-card-text>
            </b-tab>
          <b-tab title="History">
            <b-card-text>
              <History/>
            </b-card-text>
            </b-tab>
        </b-tabs>
    </b-card>
  </div>
</template>

<script>
import Profile from '@/components/Profile'
import ChangePassword from '@/components/ChangePassword'
import History from '@/components/History'

export default {
  name: 'Account',
  components: {
    Profile,
    ChangePassword,
    History
  }
}
</script>
