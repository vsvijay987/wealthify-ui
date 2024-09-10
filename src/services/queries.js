import { useQuery, useQueries, keepPreviousData } from "@tanstack/react-query";
import { getProjects, getTodo, getTodosIds } from "./api";

export function useTodosIds() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodosIds,
  });
}

export function useTodos(ids) {
  return useQueries({
    queries: (ids ?? []).map((id) => {
      return {
        queryKey: ["todo", { id }],
        queryFn: () => getTodo(id),
      };
    }),
  });
}

export function useProjects(page) {
  return useQuery({
    queryKey: ["projects", { page }],
    queryFn: () => getProjects(page),
    placeholderData: keepPreviousData,
  });
}
