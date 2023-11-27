import { Client, Account, Storage, Databases, Avatars } from 'appwrite'

export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  url: import.meta.env.VITE_APPWRITE_URL,
}

export const client = new Client()
// client.setProject('655e88eee473011d76f2')
// client.setEndpoint('https://cloud.appwrite.io/v1')
client.setProject(appwriteConfig.projectId)
client.setEndpoint(appwriteConfig.url)

export const account = new Account(client)
export const databases = new Databases(client)
export const storage = new Storage(client)
export const avatars = new Avatars(client)
