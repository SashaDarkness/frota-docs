import { z, defineCollection } from 'astro:content';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

interface HeadConfig {
	tag: string;
	attrs?: Record<string, string | boolean | undefined>;
	content?: string;
  }

export const collections = {
	docs: defineCollection({ schema: docsSchema()}),
	
	i18n: defineCollection({ 
		type: 'data', 
		
		schema: i18nSchema({ 
			extend: z.object({
			  'custom.label': z.string().optional(),
			}),
			// language: z.enum(['en', 'es']),
		  }),
	}),
};

