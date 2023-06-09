import { serverSupabaseClient } from "#supabase/server";
export default eventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  const { search } = getQuery(event);
  if (search) {
    const { data } = await client
      .from("profile")
      .select()
      .like("name", `%${search}%`);
    return data;
  }
  const { data } = await client.from("profile").select();
  return data;
});
