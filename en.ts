export const common = {
    no_clans_found: 'No clans were found in our Database for the argument you specified.',
    no_clans_linked: 'No clans are linked to this server. Why not link some?',
    clan_limit:
        'The maximum number of clans has reached.  Please consider supporting us on our [Patreon](https://patreon.com/clashperk) to add more than two clans.',
    clan_verification: [
        'We need to ensure that you are a leader or co-leader of this clan. Please verify your player account with the API token.',
        'Use the `/verify` command to verify your player account. The API token is available in the Game settings.',
        '',
        'Alternatively, you can add a temporary code `{{code}}` in your clan description. Then wait 1-2 min and execute this command again. Once it is verified, you can safely remove the code.'
    ].join('\n'),
    no_option: 'Something went wrong while executing this command. (option not found)',
    no_data: 'No data is available at this moment. We are still collecting!',
    no_clan_data: 'No data is available for {{clan}}. We are still collecting!',
    no_clan_members: '\u200e{{clan}} does not have any clan members.',
    component: {
        expired: 'This component has expired, run the command again.',
        unauthorized: 'You must execute the command to interact with components.'
    },
    no_clan_tag: 'You must provide a clan tag to execute this command!',
    no_player_tag: 'You must provide a player tag to execute this command!',
    clan_not_linked: 'No clan is linked to {{user}}.',
    player_not_linked: 'No player is linked to {{user}}.',
    guild_unauthorized: 'This server is not authorized for {{clan}}. Use `/setup` command to link the clan.',
    status_code: {
        504: '504 Request Timeout',
        400: 'Client provided incorrect parameters for the request.',
        403: 'API token does not grant access to the requested resource.',
        404: 'No matches were found for the specified tag.',
        500: 'Unknown error happened when handling the request.',
        503: 'Service is temporarily unavailable because of maintenance.',
        429: 'Request was throttled, because amount of requests was above the threshold defined for the used API token.'
    },
    clan_tag_argument: 'Clan tag / alias or @user mention.',
    player_tag_argument: 'Player tag or @user mention.'
} as const;

export const command = {
    activity: {
        description: 'Shows a graph of hourly-active clan members.',
        options: {
            clans: {
                description: 'Clan tags or aliases (Maximum 3)'
            },
            days: {
                description: 'Number of days to show in the graph.'
            }
        }
    },
    clan_games: {
        description: 'Clan games scoreboard of clan members.',
        options: {
            tag: {
                description: '$t(common.clan_tag_argument)'
            }
        }
    },
    lastseen: {
        description: 'Last seen time and activities of clan members.',
        options: {
            tag: {
                description: '$t(common.clan_tag_argument)'
            }
        }
    },
    alias: {
        description: 'Create, delete or view clan aliases.',
        create: {
            description: 'Creates a clan alias.',
            options: {
                name: {
                    description: 'Name of the alias.'
                },
                tag: {
                    description: 'Tag of the clan.'
                }
            },
            no_name: 'You must specify an alias name to execute this command.',
            no_hash: 'A clan alias must not start with a hash.',
            no_whitespace: 'A clan alias must not contain whitespace.',
            no_clan: 'You must specify a clan tag to execute this command.',
            exists: 'An alias with the name {{name}} already exists.',
            clan_not_linked: 'The clan must be linked to the server to create an alias.',
            success: 'Successfully created an alias with the name {{name}}.'
        },
        delete: {
            description: 'Deletes a clan alias.',
            options: {
                name: {
                    description: 'Tag of a clan or name of an alias'
                }
            },
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
        options: {
            color_code: {
                description: 'Hex color code (e.g #ed4245) [Patron Only]'
            },
            events_channel: {
                description: 'Clash related events channel'
            }
        },
        no_text_channel: 'You must specify a text-channel to enable this events log.'
    },
    debug: {
        description: 'Shows some basic debug information.'
    },
    cwl: {
        description: 'CWL season summary and overview.',
        options: {
            option: {
                description: 'Select an option.'
            },
            tag: {
                description: '$t(common.clan_tag_argument)'
            }
        },
        still_searching: 'Your clan {{clan}} is still searching for the opponent.',
        not_in_season: 'Your clan {{clan}} is not in the CWL season.',
        no_rounds: 'No CWL rounds have been played yet, try again after some time.',
        no_season_data: 'No CWL stats are available for the season {{season}}.',
        attacks: {
            description: 'CWL attacks overview.'
        },
        lineup: {
            description: ''
        },
        members: {
            description: ''
        },
        roster: {
            description: 'CWL roster and town hall distribution.',
            options: {
                tag: {
                    description: '$t(common.clan_tag_argument)'
                }
            }
        },
        round: {
            description: 'CWL summary for the current round.',
            options: {
                tag: {
                    description: '$t(common.clan_tag_argument)'
                },
                round: {
                    description: 'Round number to show.'
                }
            }
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
        options: {
            option: {
                description: 'Select an option.'
            },
            season: {
                description: 'The season to export.'
            },
            clans: {
                description: 'Clan tags or aliases to filter clans.'
            },
            wars: {
                description: 'Number of wars (Default: 25)'
            }
        },
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
            description: 'Create a player flag.',
            options: {
                tag: {
                    description: 'Tag of the player to flag.'
                },
                reason: {
                    description: 'Reason for the flag.'
                }
            }
        },
        delete: {
            description: 'Delete a player flag.',
            options: {
                tag: {
                    description: 'Tag of the player to delete.'
                }
            }
        },
        list: {
            description: 'List all player flags.',
            options: {
                export: {
                    description: 'Export all player flags to Excel.'
                }
            }
        },
        search: {
            description: 'Search for a player flag.',
            options: {
                tag: {
                    description: 'Tag of the player to search.'
                }
            }
        }
    },
    link: {
        description: 'Create, delete or list player links.',
        no_tag: 'You must specify a player/clan tag to execute this command.',
        create: {
            description: 'Creates a player/clan link with a user account.',
            options: {
                tag: {
                    description: 'Tag of a player or clan.'
                },
                user: {
                    description: 'User account to link to the tag.'
                },
                default: {
                    description: 'Whether this tag is default.'
                }
            },
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
            options: {
                tag: {
                    description: 'Tag of a player or clan.'
                }
            },
            no_result: 'No matches found with the tag {{tag}}.',
            success: 'Successfully deleted the link with the tag {{tag}}.',
            no_access: 'This player should be in your clan and you must be a __Verified__ Co/Leader to perform this action.'
        },
        list: {
            description: 'List all player links.',
            options: {
                tag: {
                    description: '$t(common.clan_tag_argument)'
                }
            }
        }
    },
    verify: {
        description: 'Verify and link a player using API token.',
        options: {
            tag: {
                description: 'Tag of the player to verify.'
            },
            token: {
                description: 'API token that can be found in the game settings.'
            }
        },
        success: 'Verification successful! {{info}}',
        invalid_token: 'You must provide a valid API Token that can be found in the game settings. \nhttps://i.imgur.com/8dsoUB8.jpg'
    },
    timezone: {
        description: 'Set your timezone offset.',
        options: {
            location: {
                description: "Search by country or city name (we don't store your location, only offset. e.g GMT+5:00)"
            }
        },
        set: 'Please set your timezone with the `/timezone` command. It enables you to view the graphs in your timezone.',
        no_result: 'Make your search more specific and try again.'
    },
    profile: {
        description: 'Shows user info and linked accounts.',
        options: {
            user: {
                description: 'User Id or @user mention.'
            }
        }
    },
    nickname: {
        description: 'Choose a nickname from the linked player list.',
        options: {
            user: {
                description: 'User Id or @user mention.'
            }
        }
    },
    reminder: {
        description: 'Create, delete or list war reminders.',
        create: {
            description: 'Create a war reminder to mention members.',
            options: {
                duration: {
                    description: 'Remaining duration to mention war members (Multiple of 15 mins e.g 15m, 30m, 1h, 1.25h, 1.5h)'
                },
                message: {
                    description: 'Reminder message for the notification.'
                },
                channel: {
                    description: 'Reminder message for the notification.'
                },
                clans: {
                    description: 'Optional clan tags or aliases to choose specific clans.'
                }
            },
            max_limit: 'You can only have 25 reminders.',
            invalid_duration_format: 'The duration must be in a valid format. e.g 2h, 2.5h, 30m',
            no_message: 'You must specify a message to execute this command.',
            duration_limit: 'The duration must be greater than 15 minutes and less than 45 hours.',
            duration_order: 'Duration must be a multiple of 15 minutes. e.g 15m, 30m, 45m, 1h, 1.25h, 1.5h, 1.75h',
            too_many_clans: [
                'Clan selection menu is not available for more than 25 clans. {{clans}} clans were selected automatically!',
                "To create a reminder for specific clans, pass clan tags or aliases through 'clans' option while executing the command."
            ].join('\n') as '{{clans}}',
            success: 'Successfully saved!'
        },
        delete: {
            description: 'Delete a single reminder or clear all.',
            options: {
                id: {
                    description: 'Reminder Id.'
                },
                clear: {
                    description: 'Whether to clear all reminders.'
                }
            },
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
        description: 'Parse an army composition link.',
        no_link: 'You must provide a valid army composition link.',
        invalid_link: 'This army composition link is invalid.',
        possibly_invalid_link: 'This link is invalid and may not work.',
        options: {
            link: {
                description: 'Army composition link.'
            },
            name: {
                description: 'Optional name for this army'
            }
        }
    },
    attacks: {
        description: 'Attack and defense scoreboard of clan members.',
        options: {
            tag: {
                description: '$t(common.clan_tag_argument)'
            }
        }
    },
    boosts: {
        description: 'Clan members with active super troops.',
        no_boosts: 'No members are boosting in this clan.',
        no_recent_boosts: 'No recently active members are boosting in this clan.',
        no_unit_boosts: 'No members are boosting {{unit}} in this clan.',
        no_recent_unit_boosts: 'No recently active members are boosting {{unit}} in this clan.',
        options: {
            tag: {
                description: '$t(common.clan_tag_argument)'
            }
        }
    },
    clan: {
        description: 'Shows clan summary and overview.',
        options: {
            tag: {
                description: '$t(common.clan_tag_argument)'
            }
        }
    },
    compo: {
        description: 'Shows Town Hall composition of a clan.',
        options: {
            tag: {
                description: '$t(common.clan_tag_argument)'
            }
        }
    },
    donations: {
        description: 'Donations and received donations of clan members.',
        no_season_data: 'No data found for the season {{season}}.',
        options: {
            tag: {
                description: '$t(common.clan_tag_argument)'
            },
            season: {
                description: 'The season to show donations for.'
            }
        }
    },
    lineup: {
        description: 'War lineup of a clan.',
        not_in_war: 'Clan is not in a war.',
        options: {
            tag: {
                description: '$t(common.clan_tag_argument)'
            }
        }
    },
    members: {
        description: 'Get clan member list with heroes, trophies, war preference and much more.',
        options: {
            tag: {
                description: '$t(common.clan_tag_argument)'
            },
            option: {
                description: 'Select an option.'
            }
        }
    },
    player: {
        description: 'Player summary and overview.',
        options: {
            tag: {
                description: '$t(common.player_tag_argument)'
            }
        }
    },
    remaining: {
        description: 'Remaining or missed attacks of a clan.',
        not_in_war: 'Clan is not in a war.',
        no_war_id: 'No war found for the specified war Id.',
        options: {
            tag: {
                description: '$t(common.clan_tag_argument)'
            },
            war_id: {
                description: 'Search by War Id.'
            }
        }
    },
    rushed: {
        description: 'Rushed units of a player or clan members.',
        no_rushed: 'No rushed units for Town Hall {{townhall}}.',
        options: {
            tag: {
                description: '$t(common.player_tag_argument)'
            },
            clan: {
                description: 'Display the rushed units of a clan.'
            }
        }
    },
    search: {
        description: 'Search clans by name.',
        no_results: 'No results found.',
        searching: "Clans with the name '{{name}}'",
        options: {
            name: {
                description: 'Clan name (must be 3 characters long)'
            }
        }
    },
    stats: {
        description: 'Shows attack and defense stats of clan members.',
        no_stats: 'No stats are available for this filter or clan.',
        options: {
            tag: {
                description: '$t(common.clan_tag_argument)'
            },
            compare: {
                description: 'Compare Town Halls (e.g 14vs13, 12 13, all, equal)'
            },
            stars: {
                description: 'War stars earned. (Default: 3)'
            },
            type: {
                description: 'War Type [e.g Regular, CWL, Friendly] (Default: Regular and CWL)'
            },
            season: {
                description: 'Limit the data to the last X months.'
            },
            attempt: {
                description: 'Fresh attacks or cleanup attacks. (Default: Both)'
            }
        },
        attacks: {
            description: 'Shows attack success rates of clan members.'
        },
        defense: {
            description: 'Shows defense failure rates of clan members.'
        }
    },
    units: {
        description: 'Shows units of a player with max/min levels.',
        options: {
            tag: {
                description: '$t(common.player_tag_argument)'
            }
        }
    },
    upgrades: {
        description: 'Remaining upgrades of a player with upgrading cost.',
        options: {
            tag: {
                description: '$t(common.clan_tag_argument)'
            }
        }
    },
    war: {
        description: 'Shows war summary and overview.',
        no_war_id: 'No war found for the specified war Id.',
        not_in_war: 'Clan is not in a war.',
        options: {
            tag: {
                description: '$t(common.clan_tag_argument)'
            },
            war_id: {
                description: 'Search by War Id.'
            }
        }
    },
    warlog: {
        description: 'Shows last 10 clan war logs.',
        options: {
            tag: {
                description: '$t(common.clan_tag_argument)'
            }
        }
    },
    setup: {
        description: 'Enable/disable features on the server or add/remove clans.',
        enable: {
            description: 'Enable a feature on the server or add a clan.',
            options: {
                option: {
                    description: 'Select an option.'
                },
                tag: {
                    description: 'Tag of the clan.'
                },
                channel: {
                    description: 'Channel to send updates to (defaults to the current channel)'
                },
                color: {
                    description: 'Hex color code (only for donation log, clan games, last seen and clan embed)'
                },
                role: {
                    description: 'Role for the flag notification (only for clan feed)'
                }
            },
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
            options: {
                option: {
                    description: 'Select an option.'
                },
                tag: {
                    description: 'Tag of the clan.'
                },
                channel: {
                    description: 'Channel to be removed'
                }
            },
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
            options: {
                co_leads: {
                    description: 'The Co-Leader role.'
                },
                elders: {
                    description: 'The Elder role.'
                },
                members: {
                    description: 'The Member role.'
                },
                tag: {
                    description: 'Tag of a clan. Do not pass the tag if you want the same type of roles for all clans.'
                },
                verify: {
                    description: 'Roles will be given to verified players only.'
                }
            },
            no_roles: 'You must specify 3 roles to execute this command.',
            no_system_roles: 'System managed or bot roles are not allowed.',
            no_higher_roles: 'My highest role must be higher than these roles.',
            invalid_clan_tag: 'Specified clan tag is invalid.',
            roles_already_used:
                'Some roles have already been used for another clan. \nPlease consider supporting us on [Patreon](https://patreon.com/clashperk) to use same roles for multiple clans.',
            clan_not_linked: 'The clan must be linked to the server to enable auto-role.',
            success_clan: 'Successfully enabled auto-role for the clan {{clan}}.',
            success: 'Successfully enabled auto-role for {{count}} clans.'
        },
        disable: {
            description: 'Disable auto-role feature that assigns roles to members based upon their clan role.',
            options: {
                tag: {
                    description: 'Tag of the clan.'
                }
            }
        }
    },
    summary: {
        description: 'Shows summary of wars, clans, players, clan games, etc.',
        options: {
            option: {
                description: 'Select an option.'
            },
            season: {
                description: 'Season Id for clan summary.'
            }
        },
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
        description: 'Get a list of commands or info about a specific command.',
        options: {
            name: {
                description: 'Name of the command.'
            }
        }
    },
    invite: {
        description: 'Get the bot invite and support server link.'
    },
    redeem: {
        description: 'Redeem or manage a Patreon subscription. (if you wish to support us)'
    }
} as const;

export default {
    nl: '\n',
    common,
    command
} as const;
