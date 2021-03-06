import ImageFile from 'loader/types/ImageFile.js';
import JSONFile from 'loader/types/JSONFile.js';
import MultiFile from 'loader/MultiFile.js';

export default function AtlasJSONFile (key, textureURL, atlasURL, atlasData) {

    if (atlasURL === '' && atlasData === null)
    {
        atlasURL = key + '.json';
    }

    return MultiFile(
        ImageFile(key, textureURL),
        JSONFile(key, atlasURL, atlasData)
    );

}
