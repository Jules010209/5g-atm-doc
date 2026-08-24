// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://jules010209.github.io',
	base: '/5g-atm-doc',
	integrations: [
		starlight({
			title: 'g-atm',
			description:
				'User guide for g-atm, the 4-Flight style air traffic control client for the IVAO network.',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/Jules010209/5g-atm',
				},
			],
			sidebar: [
				{
					label: 'Start here',
					items: [
						{ label: 'What is g-atm', slug: 'start/overview' },
						{ label: 'Install and first launch', slug: 'start/install' },
						{ label: 'Account settings', slug: 'start/configuration' },
						{ label: 'Operational configuration', slug: 'start/op-config' },
						{ label: 'Your first session', slug: 'start/first-session' },
					],
				},
				{
					label: 'The interface',
					items: [
						{ label: 'Screen layout', slug: 'interface/layout' },
						{ label: 'Menu bar', slug: 'interface/menu-bar' },
						{ label: 'Radar menu', slug: 'interface/radar-menu' },
						{ label: 'System Maps', slug: 'interface/system-maps' },
						{ label: 'Moving around the scope', slug: 'interface/navigation' },
						{ label: 'Windows', slug: 'interface/windows' },
					],
				},
				{
					label: 'Reading the radar',
					items: [
						{ label: 'Track and label anatomy', slug: 'labels/anatomy' },
						{ label: 'Label fields', slug: 'labels/fields' },
						{ label: 'States and colours', slug: 'labels/states' },
						{ label: 'Marking and acknowledging', slug: 'labels/marking' },
					],
				},
				{
					label: 'Controlling traffic',
					items: [
						{ label: 'Assume, release, transfer', slug: 'control/assume-transfer' },
						{ label: 'Clearances', slug: 'control/clearances' },
						{ label: 'Coordination', slug: 'control/coordination' },
						{ label: 'Holding', slug: 'control/hold' },
						{ label: 'Sequencing arrivals', slug: 'control/sequencing' },
						{ label: 'Text messages', slug: 'control/messages' },
						{ label: 'Flight plan', slug: 'control/flight-plan' },
					],
				},
				{
					label: 'Tools and safety nets',
					items: [
						{ label: 'Filters and CLEAN', slug: 'tools/filters' },
						{ label: 'Analysis tools', slug: 'tools/analysis' },
						{ label: 'STCA and TCT', slug: 'tools/alerts' },
						{ label: 'Lists and Agenda', slug: 'tools/lists' },
					],
				},
				{
					label: 'Voice',
					items: [{ label: 'TeamSpeak', slug: 'voice/teamspeak' }],
				},
				{
					label: 'CPDLC',
					items: [
						{ label: 'Overview', slug: 'cpdlc/overview' },
						{ label: 'Setting up datalink', slug: 'cpdlc/setup' },
						{ label: 'Sending clearances', slug: 'cpdlc/uplinks' },
						{ label: 'Receiving requests', slug: 'cpdlc/downlinks' },
						{ label: 'Datalink transfer', slug: 'cpdlc/transfer' },
						{ label: 'Troubleshooting', slug: 'cpdlc/troubleshooting' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Mouse and keyboard', slug: 'reference/mouse-keyboard' },
						{ label: 'Glossary', slug: 'reference/glossary' },
						{ label: 'Files and folders', slug: 'reference/files' },
						{ label: 'Troubleshooting', slug: 'reference/troubleshooting' },
					],
				},
			],
		}),
	],
});
