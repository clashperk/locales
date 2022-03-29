export const common = {
    no_clans_found: 'No clans were found in our Database for the argument you specified.',
    no_clans_linked: 'No clans are linked to this server. Why not link some?',
    clan_limit:
        'You can only add 2 clans on your server. To add more clans, please support us on our [Patreon](https://patreon.com/clashperk)',
    clan_verification:
        'We need to ensure that you are a leader or co-leader of this clan. Please verify your player account with the API token.',
    no_option: 'Something went wrong while executing this command. (option not found)',
    no_data: 'No data is available at this moment. We are still collecting!',
    component: {
        expired: 'This component has expired, run the command again.',
        unauthorized: 'You must execute the command to interact with components.'
    },
    no_clan_tag: 'You must provide a clan tag to execute this command!',
    no_player_tag: 'You must provide a player tag to execute this command!'
} as const;

export const command = {
    activity: {
        description: 'Shows a graph of hourly-active clan members.'
    },
    clan_games: {
        description: 'Clan games scoreboard of clan members.'
    },
    lastseen: {
        description: 'Last seen time and activities of clan members.'
    },
    alias: {
        description: 'Create, delete or view clan aliases.',
        create: {
            description: 'Creates a clan alias.',
            no_name: 'You must specify an alias name to execute this command.',
            no_hash: 'Clan alias must not start with a hash.',
            no_clan: 'You must specify a clan tag to execute this command.',
            exists: 'An alias with the name {{name}} already exists.',
            clan_not_linked: 'The clan must be linked to the server to create an alias.',
            success: 'Successfully created an alias with the name {{name}}.'
        },
        delete: {
            description: 'Deletes a clan alias.',
            no_name: 'You must provide a clan tag or clan alias to execute this command.',
            no_result: 'No matches found with the tag or alias {{name}}.',
            success: 'Successfully deleted the clan alias {{name}}.'
        },
        list: {
            description: 'List all clan aliases.'
        }
    },
    config: {
        description: 'Configure server settings.',
        no_text_channel: 'You must specify a text-channel to enable this events log.'
    },
    debug: {
        description: 'Shows some basic debug information.'
    },
    cwl: {
        description: 'CWL season summary and overview.',
        still_searching: 'Your clan {{clan}} is still searching for the opponent.',
        not_in_season: 'Your clan {{clan}} is not in the CWL season.',
        no_rounds: 'No rounds have been played yet.', // TODO
        attacks: {
            description: ''
        },
        lineup: {
            description: ''
        },
        members: {
            description: ''
        },
        roster: {
            description: 'CWL roster and town hall distribution.'
        },
        round: {
            description: 'CWL summary for the current round.'
        },
        stars: {
            description: ''
        },
        stats: {
            description: ''
        }
    },
    export: {
        description: 'Export war/season/clan stats to Excel.',
        cwl: {
            description: ''
        },
        last_wars: {
            description: ''
        },
        members: {
            description: ''
        },
        missed: {
            description: ''
        },
        season: {
            description: ''
        },
        wars: {
            description: ''
        }
    },
    flag: {
        description: 'Create, delete or search player flags.',
        create: {
            description: 'Create a player flag.'
        },
        delete: {
            description: 'Delete a player flag.'
        },
        list: {
            description: 'List all player flags.'
        },
        search: {
            description: 'Search for a player flag.'
        }
    },
    link: {
        description: 'Create, delete or list player links.',
        no_tag: 'You must specify a player/clan tag to execute this command.',
        create: {
            description: 'Creates a player/clan link with a user account.',
            no_bots: 'Bot accounts are not allowed to be linked.',
            fail: 'The player/clan tag you specified is not valid.',
            prompt: 'What would you like to link? A Player or a Clan?',
            success: 'Successfully linked {{target}} to {{user}}.', // target is either a player or a clan
            link_exists: '{{player}} is already linked.',
            already_linked: '{{player}} is already linked to another user. If you own this account, please use the `/verify` command.',
            max_limit: 'The maximum account limit has been reached. (25 accounts/user)'
        },
        delete: {
            description: 'Delete a player/clan link.',
            no_result: 'No matches found with the tag {{tag}}.',
            success: 'Successfully deleted the link with the tag {{tag}}.',
            no_access: 'This player should be in your clan and you must be a __Verified__ Co/Leader to perform this action.'
        },
        list: {
            description: 'List all player links.'
        }
    },
    verify: {
        description: 'Verify and link a player using API token.',
        success: 'Verification successful! {{info}}',
        invalid_token: 'You must provide a valid API Token that can be found in the game settings. \nhttps://i.imgur.com/8dsoUB8.jpg'
    },
    timezone: {
        description: 'Set your timezone offset.',
        set: 'Please set your timezone with the `/timezone` command. It enables you to view the graphs in your timezone.',
        no_result: 'Make your search more specific and try again.'
    },
    profile: {
        description: 'Shows user info and linked accounts.'
    },
    nickname: {
        description: 'Choose a nickname from the linked player list.'
    },
    reminder: {
        description: 'Create, delete or list war reminders.',
        create: {
            description: 'Create a war reminder to mention members.',
            max_limit: 'You can only have 25 reminders.',
            invalid_duration_format: 'The duration must be in a valid format. e.g 2h, 2.5h, 30m',
            no_message: 'You must specify a message to execute this command.',
            duration_limit: 'The duration must be greater than 15 minutes and less than 45 hours.',
            duration_order: 'Duration must be a multiple of 15 minutes. e.g 15m, 30m, 45m, 1h, 1.25h, 1.5h, 1.75h',
            too_many_clans: [
                'Clan selection menu is not available for more than 25 clans. {{clans}} clans were selected automatically!',
                "To create a reminder for specific clans, pass clan tags or aliases through 'clans' option while executing the command."
            ].join('\n'),
            success: 'Successfully saved!'
        },
        delete: {
            description: 'Delete a single reminder or clear all.',
            no_reminders: 'You have no reminders.',
            cleared: 'Successfully cleared all reminders.',
            not_found: 'No reminder found with the ID {{id}}.',
            success: 'Successfully deleted the reminder with the ID {{id}}.',
            too_many_reminders: 'You have too many reminders, pass reminder id to delete reminders.'
        },
        list: {
            description: 'List all war reminders.'
        }
    },
    army: {
        description: 'Parse an army composition link.'
    },
    attacks: {
        description: 'Attack and defense scoreboard of clan members.'
    },
    boosts: {
        description: 'Clan members with active super troops.'
    },
    clan: {
        description: 'Shows clan summary and overview.'
    },
    compo: {
        description: 'Shows Town Hall composition of a clan.'
    },
    donations: {
        description: 'Donations and received donations of clan members.'
    },
    lineup: {
        description: 'War lineup of a clan.'
    },
    members: {
        description: 'Get clan member list with heroes, trophies, war preference and much more.'
    },
    player: {
        description: 'Player summary and overview.'
    },
    remaining: {
        description: 'Remaining or missed attacks of a clan.'
    },
    rushed: {
        description: 'Rushed units of a player or clan members.'
    },
    search: {
        description: 'Search clans by name.'
    },
    stats: {
        description: 'Shows attack and defense stats of clan members.',
        attacks: {
            description: 'Shows attack success rates of clan members.'
        },
        defense: {
            description: 'Shows defense failure rates of clan members.'
        }
    },
    units: {
        description: 'Shows units of a player with max/min levels.'
    },
    upgrades: {
        description: 'Remaining upgrades of a player with upgrading cost.'
    },
    war: {
        description: 'Shows war summary and overview.'
    },
    warlog: {
        description: 'Shows last 10 clan war logs.'
    },
    setup: {
        description: 'Enable/disable features on the server or add/remove clans.',
        enable: {
            description: 'Enable a feature on the server or add a clan.',
            missing_access: "I'm missing {{permission}} in {{channel}} to execute this command.",
            no_leader_link: 'Clan Leader must be linked to the bot to enable this feature.',
            server_link: {
                success: 'Successfully linked {{clan}} to {{guild}}.',
                already_linked: '{{clan}} is already linked to {{guild}}.'
            },
            channel_link: {
                description: 'Link a channel to a clan.',
                already_linked: '{{clan}} is already linked to {{channel}}.',
                success: 'Successfully linked {{clan}} to {{channel}}.'
            }
        },
        disable: {
            description: 'Disable a feature on the server or remove a clan.',
            channel_unlink: 'Successfully unlinked {{clan}} from {{channel}}.',
            channel_not_found: 'I could not find any clan that is linked to {{channel}}.',
            autorole_disabled: 'Auto-role has been disabled for {{count}} clans.',
            autorole_disabled_clan: 'Auto-role has been disabled for {{clan}}.',
            clan_not_linked: 'No clans were found on the server for the tag your specified.',
            clan_deleted: 'Successfully deleted {{clan}}.',
            feature_disabled: 'Successfully disabled {{feature}} for {{clan}}.'
        },
        list: {
            description: 'List all enabled features and clans.'
        }
    },
    autorole: {
        description: 'Enable/disable auto-role feature that assigns roles to members based on their clan role.',
        enable: {
            description: 'Enable auto-role feature that assigns roles to members based on their clan role.',
            no_roles: 'You must specify 3 roles to execute this command.',
            no_system_roles: 'System managed or bot roles are not allowed.',
            no_higher_roles: 'My highest role must be higher than these roles.',
            invalid_clan_tag: 'Specified clan tag is invalid.',
            roles_already_used: 'This roles have already been used for another clan.',
            clan_not_linked: 'The clan must be linked to the server to enable auto-role.',
            success_clan: 'Successfully enabled auto-role for the clan {{clan}}.',
            success: 'Successfully enabled auto-role for {{count}} clans.'
        },
        disable: {
            description: 'Disable auto-role feature that assigns roles to members based upon their clan role.'
        }
    },
    summary: {
        description: 'Shows summary of wars, clans, players, clan games, etc.',
        clans: {
            description: ''
        },
        players: {
            description: ''
        },
        donations: {
            description: ''
        },
        trophies: {
            description: ''
        },
        wars: {
            description: ''
        }
    },
    help: {
        description: 'Get a list of commands or info about a specific command.'
    },
    invite: {
        description: 'Get the bot invite and support server link.'
    },
    redeem: {
        description: 'Redeem or manager a Patreon subscription. (if you wish to support us)'
    }
} as const;

export default {
    nl: '\n',
    common,
    command
} as const;
