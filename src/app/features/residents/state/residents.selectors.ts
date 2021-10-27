import { createFeatureSelector, createSelector } from "@ngrx/store";

import { residentsFeatureKey, ResidentsState } from "./residents.reducer";

export const selectFeature = createFeatureSelector<ResidentsState>(residentsFeatureKey);

export const selectEntities = createSelector(
  selectFeature,
  (state: ResidentsState) => state.entities,
);

export const selectLoading = createSelector(
  selectFeature,
  (state: ResidentsState) => state.loading,
);

export const selectError = createSelector(
  selectFeature,
  (state: ResidentsState) => state.error,
);
