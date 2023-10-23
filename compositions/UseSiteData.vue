<script>
export function useSiteData() {
  const { data } = useFetch(
    'https://voicenter-test-api.voicenter-ltd.workers.dev/api/site-data',
    {
      transform: (_data) => _data.data.siteData.testTaskTemplate_30_15673,
    }
  );
  return { data };
}
</script>
