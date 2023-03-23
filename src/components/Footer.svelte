<script>
const year = new Date().getFullYear()
const now = new Date().toLocaleString()
</script>

<footer class="py-4 text-center flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0 text-sm text-gray-500">
  <span>Copyright © {year}.</span>
  <span>Rendered on {now}.</span>
  <a target="_blank" class="underline" href="https://github.com/reegodev/reego.dev" rel="noopener">
    View source
  </a>
</footer>

