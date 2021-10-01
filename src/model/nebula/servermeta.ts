import { Server } from 'hl-distribution-types-sir'

export interface UntrackedFilesOption {
    /**
     * The subdirectory these patterns will be applied to. Ex.
     * [ "files", "forgegemods" ]
     */
    appliesTo: string[]
    /**
     * Glob patterns to match against the file.
     */
    patterns: string[]
}

export interface ServerMetaOptions {
    forgeVersion?: string
    liteloaderVersion?: string
}

export function getDefaultServerMeta(id: string, version: string, options?: ServerMetaOptions): ServerMeta {

    const servMeta: ServerMeta = {
        meta: {
            version: '1.0.0',
            name: `${id} (Minecraft ${version})`,
            description: `${id} Running Minecraft ${version}`,
            address: 'localhost:25565',
            discord: {
                shortId: '<PETER INSERT A MODPACK NAME HERE>',
                largeImageText: 'CHANGE_ME.vicariousnetwork.com',
                largeImageKey: 'CHANGE_ME'
            },
            mainServer: false,
            serverCode: '',
            autoconnect: false
        }
    }

    if(options?.forgeVersion) {
        servMeta.meta.description = `${servMeta.meta.description} (Forge v${options.forgeVersion})`
        servMeta.forge = {
            version: options.forgeVersion
        }
    }

    if(options?.liteloaderVersion) {
        servMeta.meta.description = `${servMeta.meta.description} (Liteloader v${options.liteloaderVersion})`
        servMeta.liteloader = {
            version: options.liteloaderVersion
        }
    }

    // Add empty untracked files.
    servMeta.untrackedFiles = []

    return servMeta
}

export interface ServerMeta {

    /**
     * Server metadata to be forwarded to the distribution file.
     */
    meta: {
        version: Server['version']
        name: Server['name']
        description: Server['description']
        address: Server['address']
        discord?: Server['discord']
        mainServer: Server['mainServer']
        serverCode: ''
        autoconnect: Server['autoconnect']
    }

    /**
     * Properties related to Forge.
     */
    forge?: {
        /**
         * The forge version. This does NOT include the minecraft version.
         * Ex. 14.23.5.2854
         */
        version: string
    }

    /**
     * Properties related to liteloader.
     */
    liteloader?: {
        /**
         * The liteloader version.
         */
        version: string
    }

    /**
     * A list of option objects defining patterns for untracked files.
     */
    untrackedFiles?: UntrackedFilesOption[]

}
