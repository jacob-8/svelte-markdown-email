<script lang="ts">
  import type { ComponentProps } from 'svelte'
  import Row from '$lib/components/email/Row.svelte'

  interface Props {
    row?: ComponentProps<typeof Row>
    address: string
    date?: any
  }

  const {
    row = {},
    address,
    date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
  }: Props = $props()
</script>

<Row {...row}>
  <td>
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tbody>
        <tr>
          <td align="center" style="font-size: 14px; line-height: 18px; font-family: Helvetica, Arial, sans-serif;">
            <span style="font-weight:bold; color:#555555;">Your Name</span>
          </td>
        </tr>
        <tr>
          <td align="center" style="font-family: Helvetica, arial, sans-serif; font-size: 13px; color: #889098; line-height: 21px;">
            {address}
          </td>
        </tr>
        <tr>
          <td align="center" style="padding: 15px 0 0; font-size: 14px; line-height: 18px; font-family: Helvetica, Arial, sans-serif; color: #555555;">
            {date} </td>
        </tr>
        <tr>
          <td width="100%" height="15"></td>
        </tr>
        <tr>
          <td align="center" style="font-family: Helvetica, arial, sans-serif; font-size: 13px; line-height: 18px; color: #555555">
            Click here to unsubscribe </td>
        </tr>
      </tbody>
    </table>
  </td>
</Row>
