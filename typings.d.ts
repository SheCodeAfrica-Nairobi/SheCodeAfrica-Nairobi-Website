export interface Event {
    id: string,
    url?: string,
    name: {
        text?: string,
        html?: string
    },
    description: {
        text?: string,
        html?: string
    },
    created: string,
    changed: string,
    published: string,
    capacity: number,
    capacity_is_custom: boolean,
    status: string,
    currency: string,
    listed: boolean,
    shareable: boolean,
    invite_only: boolean,
    online_event: boolean,
    show_remaining: boolean,
    tx_time_limit: number,
    hide_start_date: boolean,
    hide_end_date: boolean,
    locale: string,
    is_locked: boolean,
    privacy_setting: string,
    is_series: boolean,
    inventory_type: string, 
    is_reserved_seating: boolean,
    show_pick_a_seat: boolean,
    show_seatmap_thumbnail: boolean,
    show_colors_in_seatmap_thumbnail: boolean,
    source: string,
    is_free: boolean,
    version: null | string,
    summary: string,
    facebook_event_id: null | string,
    logo_id: string,
    organizer_id: string,
    venue_id: null | string,
    category_id: string,
    subcategory_id: null | string,
    format_id: string,
    resource_url: string,
    is_externally_ticked: boolean,
    organization_id: string,
    start: {
        timezone?: string,
        local?: string,
        utc?: string
    },
    end: {
        timezone?: string,
        local?: string,
        utc?: string
    },
    logo: {
        crop_mask?: {
            top_left?: {
                x?: number,
                y?: number
            },
            width?: number,
            height?: number
        },
        origin?: {
            url?: string,
            width?: number,
            height?: number
        },
        id?: string,
        url: string,
        aspect_ratio?: string,
        edge_color?: string,
        edge_color_set?: boolean
    }
}