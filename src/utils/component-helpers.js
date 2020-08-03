// @flow

import type {ComponentType} from "react";

export const getDisplayName =
  (WrappedComponent: ComponentType<any>): string => WrappedComponent.displayName ||
    WrappedComponent.name ||
    "Component";
