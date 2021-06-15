import { StreamingService } from '../streaming-services';

export const ViaplayService: StreamingService = {
	id: 'viaplay',
	name: 'Viaplay',
	homePage: 'https://viaplay.com/',
	hostPatterns: [
		'*://*.viaplay.com/*',
		'*://*.viaplay.no/*',
		'*://*.viaplay.se/*',
		'*://*.viaplay.dk/*',
		'*://*.viaplay.fi/*',
	],
	hasScrobbler: false,
	hasSync: true,
	hasAutoSync: true,
};
