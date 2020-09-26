<template>
  <div>
    <table>
      <tr class="row">
        <th></th>
        <th>First shot</th>
        <th>Second shot</th>
      </tr>
      <tr class="row">
        <td>Measles</td>
        <td>12/2001</td>
        <td>Placeholder</td>
      <tr class="row">
        <td>Rabies</td>
        <td>8/2005</td>
        <td>Placeholder</td>
      </tr>
      <tr class="row">
        <td>HPV</td>
        <td>10/2018</td>
        <td>Placeholder</td>
      </tr>
      <tr class="row">
        <td>Hepatitis A</td>
        <td>Placeholder</td>
        <td>Placeholder</td>
      </tr>
      <tr class="row">
        <td>Hepatitis B</td>
        <td>Placeholder</td>
        <td>Placeholder</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>