# Generated by Django 4.2.4 on 2023-08-05 17:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sensors', '0002_alter_moniter_off_duration'),
    ]

    operations = [
        migrations.AddField(
            model_name='moniter',
            name='status',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='moniter',
            name='usage',
            field=models.DecimalField(decimal_places=2, max_digits=10, null=True),
        ),
    ]
