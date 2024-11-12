import { JSONFilePreset } from 'lowdb/node';

const defaultData = {
    candidatos: []
}

const db = await JSONFilePreset('db.json', defaultData)

export default db