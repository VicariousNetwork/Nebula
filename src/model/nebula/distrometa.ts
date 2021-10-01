import { Distribution } from 'helios-distribution-types'

export interface DistroMeta {

    /**
     * Distribution metadata to be forwarded to the distribution file.
     */
    meta: {
        rss: Distribution['rss']
        discord?: Distribution['discord']
    }

}

export function getDefaultDistroMeta(): DistroMeta {

    return {

        meta: {
            rss: 'https://news.vicariousnetwork.com/c/announcements/5.rss',
            discord: {
                clientId: '851934070614655007',
                smallImageText: 'Vicarious Network Launcher',
                smallImageKey: 'icon'
            }
        }
        
    }

}