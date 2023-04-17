import supabase from "../../auth/supabase";

export async function getComponentsByType(componentName) {
    try {
      const { data, error } = await supabase
        .from('components')
        .select('*')
        .eq('type', componentName);
  
      if (error) {
        throw error;
      }
  
      return data;
    } catch (error) {
      console.error('Error fetching components:', error);
      return [];
    }
  }