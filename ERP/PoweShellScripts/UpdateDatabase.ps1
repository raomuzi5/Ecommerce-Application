function UpdateDatabase {
    param (
        [string]$PersistenceProjectPath,
        [string]$StartupProjectPath
    )

    # Navigate to the directory containing the solution file
    cd (Split-Path $StartupProjectPath)

    # Update database
    dotnet ef database update --project $PersistenceProjectPath --startup-project $StartupProjectPath
}

# Specify the relative paths to the project files
$PersistenceProjectPath = "D:\ERPproject\ERP.Persistence\ERP.Persistence.csproj"
$StartupProjectPath = "D:\ERPproject\ERP\ERP.csproj"

# Call the UpdateDatabase function with the provided parameters
UpdateDatabase -PersistenceProjectPath $PersistenceProjectPath -StartupProjectPath $StartupProjectPath
