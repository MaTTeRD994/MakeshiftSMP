# MakeshiftSMP

Modpack definition for the MakeshiftSMP server, managed with [packwiz](https://packwiz.infra.link/).

- **Minecraft:** 1.21.1
- **Loader:** NeoForge 21.1.235

## Structure

- `pack.toml` / `index.toml` — packwiz pack metadata (auto-generated/updated by packwiz, don't hand-edit `index.toml`)
- `mods/` — one `.toml` file per mod, pinning an exact Modrinth/CurseForge version + hash
- `CHANGELOG.md` — human-readable version history

## Updating the pack

```
packwiz modrinth add <mod-slug>
packwiz update <mod-name>       # bump one mod
packwiz update --all            # bump everything to latest compatible
packwiz refresh                 # re-hash after manual edits
```

## Installing / launching

Use [packwiz-installer](https://github.com/packwiz/packwiz-installer) (or the bootstrap jar) pointed at this repo's `pack.toml` to sync a client or server instance to what's defined here.
