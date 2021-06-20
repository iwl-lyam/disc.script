class Guild {
    constructor(data) {
        this.nsfw_level = data.nsfw_level
        this.rules_channel_id = data.rules_channel_id
        this.banner = data.banner
        this.members = data.members
        this.roles = data.roles
        this.member_count = data.member_count
        this.stage_instances = data.stage_instances
        this.emojis = data.emojis
        this.system_channel_id = data.system_channel_id
        this.icon = data.icon
        this.splash = data.splash
        this.unavailable = data.unavailable
        this.stickers = data.stickers
        this.application_id = data.application_id
        this.joined_at = data.joined_at
        this.application_command_count = data.application_command_count
        this.presences = data.presences
        this.verification_level = data.verification_level
        this.voice_states = data.voice_states
        this.premium_subscription_count = data.premium_subscription_count
        this.discovery_splash = data.discovery_splash
        this.name = data.name
        this.lazy = data.lazy
        this.vanity_url_code = data.vanity_url_code
        this.premium_tier = data.premium_tier
        this.guild_hashes = data.guild_hashes
        this.system_channel_flags = data.system_channel_flags
        this.region = data.region
        this.public_updates_channel_id = data.public_updates_channel_id
        this.nsfw = data.nsfw
        this.afk_timeout = data.afk_timeout
        this.owner_id = data.owner_id
        this.afk_channel_id = data.afk_channel_id
        this.description = data.description
        this.max_members = data.max_members
        this.large = data.large
        this.channels = data.channels
        this.features = data.features
        this.default_message_notifications = data.default_message_notifications
        this.explicit_content_filter = data.explicit_content_filter
        this.preferred_locale = data.preferred_locale
        this.mfa_level = data.mfa_level
        this.threads = data.threads
        this.max_video_channel_users = data.max_video_channel_users
        this.id = data.id
        this.guild = data
    } 
}

module.exports = {
    Guild
}
