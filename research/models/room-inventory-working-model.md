# Working Room Inventory & Capacity Model
**Version:** 0.1  
**Date:** 25 September 2026  
**Status:** planning model — not a measured survey or verified hotel inventory

## Why this model exists
The Wi-Fi, check-in, revenue and network-capacity models need an explicit room inventory. The available evidence does not establish a single current bedroom count or measured room areas, so assumptions are separated from verified facts.

## Evidence and assumptions

### Strong/source-derived context
- Fawkner Mansions is a **three-storey** building.
- Historical secondary sources conflict on the original configuration: one account gives **27 small flats**, another **25 suites**. These are historical flat counts, not proof of the current hotel bedroom count.
- Modern reporting has described the building as having **more than 70 rooms** overall. That means “rooms” in that context cannot safely be read as “hotel bedrooms”.
- A current-era hotel aggregator identified in the research dossier appeared to market approximately **15 accommodation rooms** at one point; that is a marketed-inventory snapshot, not a physical-room count.
- Current booking material lists multiple room types: single, double, twin and suite categories, often with shared bathrooms.

### User operational estimate
- Current working physical-bedroom estimate: **3 levels × about 9 bedrooms = ~27 bedrooms**.
- This is the default theoretical inventory in the model until an onsite room-by-room count is completed.

### Room-size planning envelope
No source supplied a measured room area. The supplied interior photographs show compact single/double hotel-style rooms with a bed, small table/lounge furniture and in-room basin in at least some rooms.

For planning only:
- **Compact standard room:** ~10–14 m²
- **Suite / larger room:** ~14–20 m²
- **Default planning midpoint:** **12 m² per standard bedroom**

This is a visual estimate only. Perspective distortion and unknown lens/camera position make photographs unsuitable for survey-grade dimensions.

At 27 bedrooms × 10–14 m², the **bedroom-only** area would be roughly **270–378 m² total**, or **90–126 m² per level** if distributed evenly. This expressly excludes corridors, stairs, bathrooms, kitchen, library/lounge, reception, walls and service spaces.

## Inventory states
The project should use three separate numbers:

1. **Physical/theoretical bedrooms** — rooms that could potentially function as bedrooms. Working default: 27.
2. **Usable/sellable bedrooms** — rooms actually available to guests after excluding maintenance, storage, long-term/non-hotel use, incomplete refurbishment or other unavailable stock.
3. **Occupied bedrooms** — usable bedrooms actually occupied in the model period.

Do not calculate revenue directly from the theoretical physical count.

## Recommended baseline scenarios

| Scenario | Theoretical bedrooms | Usable/sellable | Occupancy | Interpretation |
|---|---:|---:|---:|---|
| Current marketed proxy | 27 | 15 | 60% | Conservative evidence-informed starting point until onsite count |
| Partial reopening / improvement | 27 | 21 | 65% | More rooms brought into sellable condition |
| Full theoretical | 27 | 27 | 70% | All estimated bedrooms available; use only for upside modelling |
| Stress case | 27 | 12 | 45% | Significant maintenance/offline inventory |

## Network-capacity linkage
For Wi-Fi sizing, room count alone is not enough. Model:
- occupied rooms,
- average guests per occupied room,
- guest Wi-Fi take-up,
- guest devices per Wi-Fi user,
- permanently connected TVs,
- CCTV cameras,
- check-in/reception systems,
- sensors/IoT,
- staff/admin devices.

The fixed equipment is **not** part of the captive-portal population. It sits on separate managed networks/VLANs.

## Immediate verification task
Before any final owner proposal or hardware order:
1. walk each level;
2. assign every room a stable room ID;
3. classify each as bedroom / bathroom / kitchen / lounge / reception / storage / plant / circulation / other;
4. record current saleability;
5. laser-measure length × width;
6. record bed type, basin, window, power outlets, TV, current network equipment and any access-control hardware;
7. photograph the room ID and condition;
8. reconcile the onsite count with booking-platform inventory.

That onsite survey should replace the assumptions in this file rather than silently editing history.
