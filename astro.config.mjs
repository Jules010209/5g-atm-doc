// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// The sidebar follows the order of the 4-Flight training booklet ("4F pour les
// nuls", 3.0 edition): the position first, then what is on the picture, then
// the tools in the order a controller meets them. Getting started comes before,
// voice, simulation and reference material after.
export default defineConfig({
	site: 'https://jules010209.github.io',
	base: '/5g-atm-doc',
	// Pages of the first edition of the guide (August 2026), now folded into the
	// chapters: a link someone kept still lands on the right page.
	redirects: {
		'/control/assume-transfer': '/5g-atm-doc/frequency/assume-shoot/',
		'/control/clearances': '/5g-atm-doc/clearances/levels/',
		'/control/coordination': '/5g-atm-doc/coordination/point/',
		'/control/flight-plan': '/5g-atm-doc/correlation/flight-plans/',
		'/control/hold': '/5g-atm-doc/traffic/holds/',
		'/control/messages': '/5g-atm-doc/position/global-menu/',
		'/control/sequencing': '/5g-atm-doc/traffic/sequencing/',
		'/interface/layout': '/5g-atm-doc/position/layout/',
		'/interface/menu-bar': '/5g-atm-doc/position/global-menu/',
		'/interface/navigation': '/5g-atm-doc/position/navigation/',
		'/interface/radar-menu': '/5g-atm-doc/position/radar-menu/',
		'/interface/system-maps': '/5g-atm-doc/position/system-maps/',
		'/interface/windows': '/5g-atm-doc/position/windows/',
		'/labels/anatomy': '/5g-atm-doc/labels/formats/',
		'/labels/marking': '/5g-atm-doc/markings/highlights/',
		'/labels/states': '/5g-atm-doc/flights/states/',
		'/start/op-config': '/5g-atm-doc/cco/op-conf/',
		'/tools/alerts': '/5g-atm-doc/alerts/safety-nets/',
		'/tools/analysis': '/5g-atm-doc/conflicts/group-sep-qdm/',
		'/tools/filters': '/5g-atm-doc/position/filters/',
		'/tools/lists': '/5g-atm-doc/traffic/sequencing/',
	},
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
					label: 'Getting started',
					items: [
						{ label: 'What is g-atm', slug: 'start/overview' },
						{ label: 'Install and update', slug: 'start/install' },
						{ label: 'Account settings', slug: 'start/configuration' },
						{ label: 'Your first session', slug: 'start/first-session' },
					],
				},
				{
					label: '1. Setting up the position',
					items: [
						{ label: 'The screen', slug: 'position/layout' },
						{ label: 'Global Menu', slug: 'position/global-menu' },
						{ label: 'Filter Area and filtering', slug: 'position/filters' },
						{ label: 'Moving around the picture', slug: 'position/navigation' },
						{ label: 'Radar Menu and Track Menu', slug: 'position/radar-menu' },
						{ label: 'Secondary images and tracking', slug: 'position/secondary-images' },
						{ label: 'CLEAN and standard configuration', slug: 'position/clean-standard' },
						{ label: 'System Maps', slug: 'position/system-maps' },
						{ label: 'Windows and screens', slug: 'position/windows' },
					],
				},
				{
					label: '2. Flight states',
					items: [
						{ label: 'States and colours', slug: 'flights/states' },
						{ label: 'Seen, Not Seen and REV', slug: 'flights/seen-rev' },
					],
				},
				{
					label: '3. Labels',
					items: [
						{ label: 'Label formats and tabs', slug: 'labels/formats' },
						{ label: 'Label fields', slug: 'labels/fields' },
						{ label: 'Flight Leg', slug: 'labels/flight-leg' },
						{ label: 'DyP Info', slug: 'labels/dyp-info' },
					],
				},
				{
					label: '4. Markings',
					items: [
						{ label: 'Highlights, warnings, Track Ring', slug: 'markings/highlights' },
						{ label: 'iCoop, iCoor, Xcoor, Ecoor, Notepad', slug: 'markings/notes' },
					],
				},
				{
					label: '5. Clearances',
					items: [
						{ label: 'Levels: the CFL menu', slug: 'clearances/levels' },
						{ label: 'Route and heading', slug: 'clearances/route-heading' },
						{ label: 'Speed, rate and AMID', slug: 'clearances/speed-rate' },
					],
				},
				{
					label: '6. CPDLC',
					items: [
						{ label: 'Overview', slug: 'cpdlc/overview' },
						{ label: 'Setting up datalink', slug: 'cpdlc/setup' },
						{ label: 'Sending clearances', slug: 'cpdlc/uplinks' },
						{ label: 'Pilot requests', slug: 'cpdlc/downlinks' },
						{ label: 'Transfer and Comm Resp', slug: 'cpdlc/transfer' },
						{ label: 'Other messages', slug: 'cpdlc/other-messages' },
						{ label: 'Troubleshooting', slug: 'cpdlc/troubleshooting' },
					],
				},
				{
					label: '7. Conflict management',
					items: [
						{ label: 'Contextual filters', slug: 'conflicts/contextual-filters' },
						{ label: 'Group, SEP, QDM, CPA', slug: 'conflicts/group-sep-qdm' },
						{ label: 'Range Rings', slug: 'conflicts/range-rings' },
						{ label: 'Agenda and Datablocks', slug: 'conflicts/agenda' },
					],
				},
				{
					label: '8. Profile and route',
					items: [
						{ label: 'Changing a level', slug: 'profile/levels' },
						{ label: 'Changing the route', slug: 'profile/route' },
					],
				},
				{
					label: '9. Coordination',
					items: [
						{ label: 'POINT', slug: 'coordination/point' },
						{ label: 'NEGO and FL?', slug: 'coordination/nego' },
						{ label: 'Next sector and Force ACT', slug: 'coordination/next-sector' },
					],
				},
				{
					label: '10. Frequency states',
					items: [
						{ label: 'Assume and shoot', slug: 'frequency/assume-shoot' },
						{ label: 'Manual transfer, NS, DELEG', slug: 'frequency/transfer' },
						{ label: 'SKIP, SHRQ, Reclaim, LOST, Comm Resp', slug: 'frequency/skip-shrq' },
					],
				},
				{
					label: '11. Correlation and flight plans',
					items: [
						{ label: 'Correlation alerts', slug: 'correlation/alerts' },
						{ label: 'FPASD and lost tracks', slug: 'correlation/lost-tracks' },
						{ label: 'Finding and editing plans', slug: 'correlation/flight-plans' },
					],
				},
				{
					label: '12. Alerts and monitoring',
					items: [
						{ label: 'Safety nets: STCA, TCT, APW', slug: 'alerts/safety-nets' },
						{ label: 'Monitoring and other alerts', slug: 'alerts/monitoring' },
					],
				},
				{
					label: '13. Arrivals and departures',
					items: [
						{ label: 'Sequencing arrivals', slug: 'traffic/sequencing' },
						{ label: 'Runway and STAR', slug: 'traffic/runway-star' },
						{ label: 'Holding', slug: 'traffic/holds' },
						{ label: 'STAMAN', slug: 'traffic/staman' },
						{ label: 'Departures', slug: 'traffic/departures' },
					],
				},
				{
					label: '14. Configuration change',
					items: [
						{ label: 'OP CONF and PREPA mode', slug: 'cco/op-conf' },
						{ label: 'Splitting, grouping, roles', slug: 'cco/regrouping' },
						{ label: 'Sharing between positions', slug: 'cco/sharing' },
					],
				},
				{
					label: '15. Particular flights',
					items: [
						{ label: 'VFR, military, special codes', slug: 'particular/vfr-mil' },
						{ label: 'Switch, patrol, STAY', slug: 'particular/switch-patrol-stay' },
					],
				},
				{
					label: 'Voice',
					items: [{ label: 'TeamSpeak', slug: 'voice/teamspeak' }],
				},
				{
					label: 'Simulation',
					items: [{ label: 'Joining a simulation', slug: 'simulation/joining' }],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Mouse and keyboard', slug: 'reference/mouse-keyboard' },
						{ label: 'Local Settings', slug: 'reference/local-settings' },
						{ label: 'Glossary', slug: 'reference/glossary' },
						{ label: 'Files and folders', slug: 'reference/files' },
						{ label: 'What g-atm does not do', slug: 'reference/not-implemented' },
						{ label: 'Troubleshooting', slug: 'reference/troubleshooting' },
					],
				},
			],
		}),
	],
});
