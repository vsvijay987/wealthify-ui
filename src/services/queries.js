import { useQuery, useQueries, keepPreviousData } from "@tanstack/react-query";
import { getProjects, getTodo, getUsers } from "./api";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
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
