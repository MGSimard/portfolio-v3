/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as WebdevImport } from './routes/webdev'
import { Route as IndexImport } from './routes/index'
import { Route as GamedevIndexImport } from './routes/gamedev/index'
import { Route as GamedevTuMiscImport } from './routes/gamedev/tu-misc'
import { Route as GamedevTerminalImport } from './routes/gamedev/terminal'
import { Route as GamedevStation58Import } from './routes/gamedev/station-58'
import { Route as GamedevQuindecimImport } from './routes/gamedev/quindecim'
import { Route as GamedevOverdoseImport } from './routes/gamedev/overdose'
import { Route as GamedevLumbridgeCastleImport } from './routes/gamedev/lumbridge-castle'
import { Route as GamedevLakeHotPursuitImport } from './routes/gamedev/lake-hot-pursuit'
import { Route as GamedevJunkFleaImport } from './routes/gamedev/junk-flea'
import { Route as GamedevExplodedCinemaImport } from './routes/gamedev/exploded-cinema'
import { Route as GamedevDeathrunImport } from './routes/gamedev/deathrun'

// Create/Update Routes

const WebdevRoute = WebdevImport.update({
  id: '/webdev',
  path: '/webdev',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const GamedevIndexRoute = GamedevIndexImport.update({
  id: '/gamedev/',
  path: '/gamedev/',
  getParentRoute: () => rootRoute,
} as any)

const GamedevTuMiscRoute = GamedevTuMiscImport.update({
  id: '/gamedev/tu-misc',
  path: '/gamedev/tu-misc',
  getParentRoute: () => rootRoute,
} as any)

const GamedevTerminalRoute = GamedevTerminalImport.update({
  id: '/gamedev/terminal',
  path: '/gamedev/terminal',
  getParentRoute: () => rootRoute,
} as any)

const GamedevStation58Route = GamedevStation58Import.update({
  id: '/gamedev/station-58',
  path: '/gamedev/station-58',
  getParentRoute: () => rootRoute,
} as any)

const GamedevQuindecimRoute = GamedevQuindecimImport.update({
  id: '/gamedev/quindecim',
  path: '/gamedev/quindecim',
  getParentRoute: () => rootRoute,
} as any)

const GamedevOverdoseRoute = GamedevOverdoseImport.update({
  id: '/gamedev/overdose',
  path: '/gamedev/overdose',
  getParentRoute: () => rootRoute,
} as any)

const GamedevLumbridgeCastleRoute = GamedevLumbridgeCastleImport.update({
  id: '/gamedev/lumbridge-castle',
  path: '/gamedev/lumbridge-castle',
  getParentRoute: () => rootRoute,
} as any)

const GamedevLakeHotPursuitRoute = GamedevLakeHotPursuitImport.update({
  id: '/gamedev/lake-hot-pursuit',
  path: '/gamedev/lake-hot-pursuit',
  getParentRoute: () => rootRoute,
} as any)

const GamedevJunkFleaRoute = GamedevJunkFleaImport.update({
  id: '/gamedev/junk-flea',
  path: '/gamedev/junk-flea',
  getParentRoute: () => rootRoute,
} as any)

const GamedevExplodedCinemaRoute = GamedevExplodedCinemaImport.update({
  id: '/gamedev/exploded-cinema',
  path: '/gamedev/exploded-cinema',
  getParentRoute: () => rootRoute,
} as any)

const GamedevDeathrunRoute = GamedevDeathrunImport.update({
  id: '/gamedev/deathrun',
  path: '/gamedev/deathrun',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/webdev': {
      id: '/webdev'
      path: '/webdev'
      fullPath: '/webdev'
      preLoaderRoute: typeof WebdevImport
      parentRoute: typeof rootRoute
    }
    '/gamedev/deathrun': {
      id: '/gamedev/deathrun'
      path: '/gamedev/deathrun'
      fullPath: '/gamedev/deathrun'
      preLoaderRoute: typeof GamedevDeathrunImport
      parentRoute: typeof rootRoute
    }
    '/gamedev/exploded-cinema': {
      id: '/gamedev/exploded-cinema'
      path: '/gamedev/exploded-cinema'
      fullPath: '/gamedev/exploded-cinema'
      preLoaderRoute: typeof GamedevExplodedCinemaImport
      parentRoute: typeof rootRoute
    }
    '/gamedev/junk-flea': {
      id: '/gamedev/junk-flea'
      path: '/gamedev/junk-flea'
      fullPath: '/gamedev/junk-flea'
      preLoaderRoute: typeof GamedevJunkFleaImport
      parentRoute: typeof rootRoute
    }
    '/gamedev/lake-hot-pursuit': {
      id: '/gamedev/lake-hot-pursuit'
      path: '/gamedev/lake-hot-pursuit'
      fullPath: '/gamedev/lake-hot-pursuit'
      preLoaderRoute: typeof GamedevLakeHotPursuitImport
      parentRoute: typeof rootRoute
    }
    '/gamedev/lumbridge-castle': {
      id: '/gamedev/lumbridge-castle'
      path: '/gamedev/lumbridge-castle'
      fullPath: '/gamedev/lumbridge-castle'
      preLoaderRoute: typeof GamedevLumbridgeCastleImport
      parentRoute: typeof rootRoute
    }
    '/gamedev/overdose': {
      id: '/gamedev/overdose'
      path: '/gamedev/overdose'
      fullPath: '/gamedev/overdose'
      preLoaderRoute: typeof GamedevOverdoseImport
      parentRoute: typeof rootRoute
    }
    '/gamedev/quindecim': {
      id: '/gamedev/quindecim'
      path: '/gamedev/quindecim'
      fullPath: '/gamedev/quindecim'
      preLoaderRoute: typeof GamedevQuindecimImport
      parentRoute: typeof rootRoute
    }
    '/gamedev/station-58': {
      id: '/gamedev/station-58'
      path: '/gamedev/station-58'
      fullPath: '/gamedev/station-58'
      preLoaderRoute: typeof GamedevStation58Import
      parentRoute: typeof rootRoute
    }
    '/gamedev/terminal': {
      id: '/gamedev/terminal'
      path: '/gamedev/terminal'
      fullPath: '/gamedev/terminal'
      preLoaderRoute: typeof GamedevTerminalImport
      parentRoute: typeof rootRoute
    }
    '/gamedev/tu-misc': {
      id: '/gamedev/tu-misc'
      path: '/gamedev/tu-misc'
      fullPath: '/gamedev/tu-misc'
      preLoaderRoute: typeof GamedevTuMiscImport
      parentRoute: typeof rootRoute
    }
    '/gamedev/': {
      id: '/gamedev/'
      path: '/gamedev'
      fullPath: '/gamedev'
      preLoaderRoute: typeof GamedevIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/webdev': typeof WebdevRoute
  '/gamedev/deathrun': typeof GamedevDeathrunRoute
  '/gamedev/exploded-cinema': typeof GamedevExplodedCinemaRoute
  '/gamedev/junk-flea': typeof GamedevJunkFleaRoute
  '/gamedev/lake-hot-pursuit': typeof GamedevLakeHotPursuitRoute
  '/gamedev/lumbridge-castle': typeof GamedevLumbridgeCastleRoute
  '/gamedev/overdose': typeof GamedevOverdoseRoute
  '/gamedev/quindecim': typeof GamedevQuindecimRoute
  '/gamedev/station-58': typeof GamedevStation58Route
  '/gamedev/terminal': typeof GamedevTerminalRoute
  '/gamedev/tu-misc': typeof GamedevTuMiscRoute
  '/gamedev': typeof GamedevIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/webdev': typeof WebdevRoute
  '/gamedev/deathrun': typeof GamedevDeathrunRoute
  '/gamedev/exploded-cinema': typeof GamedevExplodedCinemaRoute
  '/gamedev/junk-flea': typeof GamedevJunkFleaRoute
  '/gamedev/lake-hot-pursuit': typeof GamedevLakeHotPursuitRoute
  '/gamedev/lumbridge-castle': typeof GamedevLumbridgeCastleRoute
  '/gamedev/overdose': typeof GamedevOverdoseRoute
  '/gamedev/quindecim': typeof GamedevQuindecimRoute
  '/gamedev/station-58': typeof GamedevStation58Route
  '/gamedev/terminal': typeof GamedevTerminalRoute
  '/gamedev/tu-misc': typeof GamedevTuMiscRoute
  '/gamedev': typeof GamedevIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/webdev': typeof WebdevRoute
  '/gamedev/deathrun': typeof GamedevDeathrunRoute
  '/gamedev/exploded-cinema': typeof GamedevExplodedCinemaRoute
  '/gamedev/junk-flea': typeof GamedevJunkFleaRoute
  '/gamedev/lake-hot-pursuit': typeof GamedevLakeHotPursuitRoute
  '/gamedev/lumbridge-castle': typeof GamedevLumbridgeCastleRoute
  '/gamedev/overdose': typeof GamedevOverdoseRoute
  '/gamedev/quindecim': typeof GamedevQuindecimRoute
  '/gamedev/station-58': typeof GamedevStation58Route
  '/gamedev/terminal': typeof GamedevTerminalRoute
  '/gamedev/tu-misc': typeof GamedevTuMiscRoute
  '/gamedev/': typeof GamedevIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/webdev'
    | '/gamedev/deathrun'
    | '/gamedev/exploded-cinema'
    | '/gamedev/junk-flea'
    | '/gamedev/lake-hot-pursuit'
    | '/gamedev/lumbridge-castle'
    | '/gamedev/overdose'
    | '/gamedev/quindecim'
    | '/gamedev/station-58'
    | '/gamedev/terminal'
    | '/gamedev/tu-misc'
    | '/gamedev'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/webdev'
    | '/gamedev/deathrun'
    | '/gamedev/exploded-cinema'
    | '/gamedev/junk-flea'
    | '/gamedev/lake-hot-pursuit'
    | '/gamedev/lumbridge-castle'
    | '/gamedev/overdose'
    | '/gamedev/quindecim'
    | '/gamedev/station-58'
    | '/gamedev/terminal'
    | '/gamedev/tu-misc'
    | '/gamedev'
  id:
    | '__root__'
    | '/'
    | '/webdev'
    | '/gamedev/deathrun'
    | '/gamedev/exploded-cinema'
    | '/gamedev/junk-flea'
    | '/gamedev/lake-hot-pursuit'
    | '/gamedev/lumbridge-castle'
    | '/gamedev/overdose'
    | '/gamedev/quindecim'
    | '/gamedev/station-58'
    | '/gamedev/terminal'
    | '/gamedev/tu-misc'
    | '/gamedev/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  WebdevRoute: typeof WebdevRoute
  GamedevDeathrunRoute: typeof GamedevDeathrunRoute
  GamedevExplodedCinemaRoute: typeof GamedevExplodedCinemaRoute
  GamedevJunkFleaRoute: typeof GamedevJunkFleaRoute
  GamedevLakeHotPursuitRoute: typeof GamedevLakeHotPursuitRoute
  GamedevLumbridgeCastleRoute: typeof GamedevLumbridgeCastleRoute
  GamedevOverdoseRoute: typeof GamedevOverdoseRoute
  GamedevQuindecimRoute: typeof GamedevQuindecimRoute
  GamedevStation58Route: typeof GamedevStation58Route
  GamedevTerminalRoute: typeof GamedevTerminalRoute
  GamedevTuMiscRoute: typeof GamedevTuMiscRoute
  GamedevIndexRoute: typeof GamedevIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  WebdevRoute: WebdevRoute,
  GamedevDeathrunRoute: GamedevDeathrunRoute,
  GamedevExplodedCinemaRoute: GamedevExplodedCinemaRoute,
  GamedevJunkFleaRoute: GamedevJunkFleaRoute,
  GamedevLakeHotPursuitRoute: GamedevLakeHotPursuitRoute,
  GamedevLumbridgeCastleRoute: GamedevLumbridgeCastleRoute,
  GamedevOverdoseRoute: GamedevOverdoseRoute,
  GamedevQuindecimRoute: GamedevQuindecimRoute,
  GamedevStation58Route: GamedevStation58Route,
  GamedevTerminalRoute: GamedevTerminalRoute,
  GamedevTuMiscRoute: GamedevTuMiscRoute,
  GamedevIndexRoute: GamedevIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/webdev",
        "/gamedev/deathrun",
        "/gamedev/exploded-cinema",
        "/gamedev/junk-flea",
        "/gamedev/lake-hot-pursuit",
        "/gamedev/lumbridge-castle",
        "/gamedev/overdose",
        "/gamedev/quindecim",
        "/gamedev/station-58",
        "/gamedev/terminal",
        "/gamedev/tu-misc",
        "/gamedev/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/webdev": {
      "filePath": "webdev.tsx"
    },
    "/gamedev/deathrun": {
      "filePath": "gamedev/deathrun.tsx"
    },
    "/gamedev/exploded-cinema": {
      "filePath": "gamedev/exploded-cinema.tsx"
    },
    "/gamedev/junk-flea": {
      "filePath": "gamedev/junk-flea.tsx"
    },
    "/gamedev/lake-hot-pursuit": {
      "filePath": "gamedev/lake-hot-pursuit.tsx"
    },
    "/gamedev/lumbridge-castle": {
      "filePath": "gamedev/lumbridge-castle.tsx"
    },
    "/gamedev/overdose": {
      "filePath": "gamedev/overdose.tsx"
    },
    "/gamedev/quindecim": {
      "filePath": "gamedev/quindecim.tsx"
    },
    "/gamedev/station-58": {
      "filePath": "gamedev/station-58.tsx"
    },
    "/gamedev/terminal": {
      "filePath": "gamedev/terminal.tsx"
    },
    "/gamedev/tu-misc": {
      "filePath": "gamedev/tu-misc.tsx"
    },
    "/gamedev/": {
      "filePath": "gamedev/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
