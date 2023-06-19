/** Author: Anshuman singh*/
/**It is a model for the files with url */

import { SafeUrl } from "@angular/platform-browser";

export interface FileHandle {
    file: File,
    url: SafeUrl
}