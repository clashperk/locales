import 'reflect-metadata';
import { request as fetch, Dispatcher } from 'undici';

const isOk = (res: Dispatcher.ResponseData) => res.statusCode >= 200 && res.statusCode < 300;

(async () => {
    const response = await fetch('https://api.crowdin.com/api/v2/projects/522390/strings?fileId=18&limit=500', {
        headers: {
            'Authorization': `Bearer ${process.env.CROWDIN_API!}`,
            'Content-Type': 'application/json'
        },
        method: 'GET'
    });
    const result = await response.body.json();
    if (response.statusCode !== 200) console.log(JSON.stringify(result));

    for (const item of result.data ?? []) {
        if (item.data.identifier.endsWith('.description') && item.data.maxLength === 0) {
            if (item.data.text.length > 100) {
                console.log(`${item.data.identifier as string} is too long.`);
            }

            const res = await fetch(`https://api.crowdin.com/api/v2/projects/522390/strings/${item.data.id as string}`, {
                headers: {
                    'Authorization': `Bearer ${process.env.CROWDIN_API!}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([
                    {
                        op: 'replace',
                        path: '/maxLength',
                        value: 100
                    }
                ]),
                method: 'PATCH'
            });
            const data = await res.body.json();
            if (!isOk(res)) console.log(JSON.stringify(data));
            console.log(`${item.data.identifier as string} updated.`);
        }
    }
})();
