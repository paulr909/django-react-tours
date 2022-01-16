from api.models import Booking, Package, PackagePermission, WishListItem
from django.contrib import admin


class PackagePermissionInline(admin.TabularInline):
    model = PackagePermission


class PackageAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "category", "price", "rating", "tour_length", "start")
    inlines = (PackagePermissionInline,)


class WishListItemAdmin(admin.ModelAdmin):
    model = WishListItem


class BookingAdmin(admin.ModelAdmin):
    model = Booking


admin.site.register(Package, PackageAdmin)
admin.site.register(WishListItem, WishListItemAdmin)
admin.site.register(Booking, BookingAdmin)
