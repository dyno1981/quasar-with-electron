import {ipcMain as im, dialog, SaveDialogOptions } from 'electron'
import {promises as fsp} from 'fs'

im.handle('saveTextFile', async (event, text: string) => {
  const options: SaveDialogOptions = {
    properties: ['createDirectory']
  }
  const r = await dialog.showSaveDialog(options)
  if (!r.filePath) throw Error('cancel')
  await fsp.writeFile(r.filePath, text)
  return r.filePath
})
