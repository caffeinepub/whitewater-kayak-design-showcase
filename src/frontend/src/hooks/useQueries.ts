import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { KayakDesign } from '../backend';

export function useGetAllKayakDesigns() {
  const { actor, isFetching } = useActor();

  return useQuery<KayakDesign[]>({
    queryKey: ['kayakDesigns'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllKayakDesigns();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddKayakDesign() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (design: {
      name: string;
      manufacturer: string;
      designYear: bigint;
      imageUrl: string;
      externalLink: string;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.addKayakDesign(
        design.name,
        design.manufacturer,
        design.designYear,
        design.imageUrl,
        design.externalLink
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['kayakDesigns'] });
    },
  });
}
